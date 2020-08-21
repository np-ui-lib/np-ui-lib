import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import * as _ from 'lodash';

let data: any[];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() {
        data = this._getDataList(10000);
    }

    _getDataList(count: number) {
        const names = ['Maria', 'Ana', 'Antonio', 'Thomas', 'Christina', 'Hanna', 'Frédérique', 'Martín', 'Laurence',
            'Elizabeth', 'Victoria', 'Patricio', 'Francisco', 'Yang', 'Pedro', 'Elizabeth', 'Sven', 'Janine', 'Ann',
            'Roland', 'Aria', 'Diego', 'Martine', 'Maria', 'Peter', 'Carine', 'Paolo', 'Lino', 'Eduardo', 'José',
            'André', 'Howard', 'Manuel', 'Mario', 'Carlos', 'Yoshi', 'Patricia', 'Helen', 'Philip', 'Daniel', 'Annette',
            'Yoshi', 'John', 'Renate', 'Jaime', 'Carlos', 'Felipe', 'Fran', 'Giovanni', 'Catherine', 'Jean', 'Alexander',
            'Simon', 'Yvonne', 'Rene', 'Henriette', 'Marie', 'Guillermo', 'Georg', 'Isabel', 'Bernardo', 'Lúcia', 'Horst',
            'Sergio', 'Paula', 'Maurizio', 'Janete', 'Michael', 'Alejandra', 'Jonas', 'Jose', 'Hari', 'Jytte', 'Dominique',
            'Art', 'Pascale', 'Liz', 'Liu', 'Karin', 'Miguel', 'Anabela', 'Helvetius', 'Palle', 'Mary', 'Paul', 'Rita',
            'Pirkko', 'Paula', 'Karl', 'Matti', 'Zbyszek'
        ];
        const surNames = ['Anders', 'Trujillo', 'Moreno', 'Hardy', 'Berglund', 'Moos', 'Citeaux', 'Sommer', 'Lebihan',
            'Lincoln', 'Ashworth', 'Simpson', 'Chang', 'Wang', 'Afonso', 'Brown', 'Ottlieb', 'Labrune', 'Devon', 'Mendel',
            'Cruz', 'Roel', 'Rancé', 'Larsson', 'Franken', 'Schmitt', 'Accorti', 'Rodriguez', 'Saavedra', 'Pedro', 'Fonseca',
            'Snyder', 'Pereira', 'Pontes', 'Hernández', 'Latimer', 'McKenna', 'Bennett', 'Cramer', 'Tonini', 'Roulet',
            'Tannamuri', 'Steel', 'Messner', 'Yorres', 'González', 'Izquierdo', 'Wilson', 'Rovelli', 'Dewey', 'Fresnière',
            'Feuer', 'Crowther', 'Moncada', 'Phillips', 'Pfalzheim', 'Bertrand', 'Fernández', 'Pipps', 'de', 'Batista',
            'Carvalho', 'Kloss', 'Gutiérrez', 'Wilson', 'Moroni', 'Limeira', 'Holz', 'Camino', 'Bergulfsen', 'Pavarotti',
            'Kumar', 'Petersen', 'Perrier', 'Braunschweiger', 'Cartrain', 'Nixon', 'Wong', 'Josephs', 'Angel', 'Domingues',
            'Nagy', 'Ibsen', 'Saveley', 'Henriot', 'Müller', 'Koskitalo', 'Parente', 'Jablonski', 'Karttunen', 'Piestrzeniewicz'];

        const dataList = [];
        for (let i = 1; i <= count; i++) {
            dataList.push(getDataRow(i));
        }

        return dataList;

        function getDataRow(id) {
            const bday = randomDate(new Date(1950, 10, 28), new Date(2018, 10, 28), 0, 23);
            const nameLength = names.length;
            const surnameLength = surNames.length;
            return {
                Id: id,
                FirstName: names[Math.floor(Math.random() * nameLength)],
                LastName: surNames[Math.floor(Math.random() * surnameLength)],
                Age: new Date().getFullYear() - bday.getFullYear(),
                Active: (Math.round(Math.random() % 2) === 0),
                BirthDate: bday
            };
        }

        function randomDate(start, end, startHour, endHour) {
            const date = new Date(+start + Math.random() * (end - start));
            const hour = (startHour + Math.random() * (endHour - startHour)) || 0;
            date.setHours(hour);
            return date;
        }
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, body } = request;

        if (url.endsWith('/getAllUsers') || url.endsWith('/getAllUsers') || url.endsWith('/updateUsers')) {
            // wrap in delayed observable to simulate server api call
            return of(null)
                .pipe(mergeMap(handleRoute))
                .pipe(materialize())
                .pipe(delay(500))
                .pipe(dematerialize());
        }

        return next.handle(request);

        function handleRoute() {
            switch (true) {
                case url.endsWith('/getAllUsers') && method === 'GET':
                    return getAllUsers();
                case url.endsWith('/getAllUsers') && method === 'POST':
                    return getAllUsersWithOptions(body);
                case url.endsWith('/updateUsers') && method === 'POST':
                    return updateUsers(body);
            }
        }

        function getAllUsers() {
            return ok(data);
        }

        function getAllUsersWithOptions(loadOptions: any) {
            let data2 = data;

            if (loadOptions.filterColumns && loadOptions.filterColumns.length > 0) {
                data2 = filterData(data2, loadOptions.filterColumns);
            }

            if (loadOptions.sortColumns && loadOptions.sortColumns.length > 0) {
                for (const element of loadOptions.sortColumns) {
                    data2 = _.orderBy(data2, element.dataField, element.sortDirection);
                }
            }

            const startIndex = (loadOptions.pageNumber - 1) * loadOptions.pageSize;
            const endIndex = Math.min(startIndex + loadOptions.pageSize - 1, data2.length - 1);

            const result = { data: data2.slice(startIndex, endIndex + 1), total: data2.length };
            return ok(result);
        }

        function filterData(dataSource: any, filterColumns: any[]) {
            for (const element of filterColumns) {
                if (element.filterOperator === 'startswith') {
                    dataSource = _.filter(dataSource, a => {
                        return _.startsWith(a[element.dataField].toLowerCase(), element.filterValue.toLowerCase());
                    });
                } else if (element.filterOperator === 'endswith') {
                    dataSource = _.filter(dataSource, a => {
                        return _.endsWith(a[element.dataField].toLowerCase(), element.filterValue.toLowerCase());
                    });
                } else if (element.filterOperator === 'contains') {
                    dataSource = _.filter(dataSource, a => {
                        return a[element.dataField].toLowerCase().indexOf(element.filterValue.toLowerCase()) !== -1;
                    });
                } else if (element.filterOperator === 'gt') {
                    if (element.dataType === 'number') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField] > Number(element.filterValue);
                        });
                    } else if (element.dataType === 'date') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField].setHours(0, 0, 0, 0) > new Date(element.filterValue).setHours(0, 0, 0, 0);
                        });
                    }
                } else if (element.filterOperator === 'ge') {
                    if (element.dataType === 'number') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField] >= Number(element.filterValue);
                        });
                    } else if (element.dataType === 'date') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField].setHours(0, 0, 0, 0) >= new Date(element.filterValue).setHours(0, 0, 0, 0);
                        });
                    }
                } else if (element.filterOperator === 'lt') {
                    if (element.dataType === 'number') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField] < Number(element.filterValue);
                        });
                    } else if (element.dataType === 'date') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField].setHours(0, 0, 0, 0) < new Date(element.filterValue).setHours(0, 0, 0, 0);
                        });
                    }
                } else if (element.filterOperator === 'le') {
                    if (element.dataType === 'number') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField] <= Number(element.filterValue);
                        });
                    } else if (element.dataType === 'date') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField].setHours(0, 0, 0, 0) <= new Date(element.filterValue).setHours(0, 0, 0, 0);
                        });
                    }
                } else if (element.filterOperator === 'eq') {
                    if (element.dataType === 'boolean') {
                        if (element.filterValue === 'true') {
                            dataSource = _.filter(dataSource, a => {
                                return a[element.dataField] === true;
                            });
                        } else {
                            dataSource = _.filter(dataSource, a => {
                                return a[element.dataField] === false;
                            });
                        }
                    } else if (element.dataType === 'number') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField] === Number(element.filterValue);
                        });
                    } else if (element.dataType === 'date') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField].setHours(0, 0, 0, 0) === new Date(element.filterValue).setHours(0, 0, 0, 0);
                        });
                    } else if (element.dataType === 'string') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField].toLowerCase() === element.filterValue.toLowerCase();
                        });
                    }
                }
                else if (element.filterOperator === 'ne') {
                    if (element.dataType === 'boolean') {
                        if (element.filterValue === 'true') {
                            dataSource = _.filter(dataSource, a => {
                                return a[element.dataField] !== true;
                            });
                        } else {
                            dataSource = _.filter(dataSource, a => {
                                return a[element.dataField] !== false;
                            });
                        }
                    } else if (element.dataType === 'number') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField] !== Number(element.filterValue);
                        });
                    } else if (element.dataType === 'date') {
                        dataSource = _.filter(dataSource, a => {
                            return a[element.dataField].setHours(0, 0, 0, 0) !== new Date(element.filterValue).setHours(0, 0, 0, 0);
                        });
                    }
                }
            }
            return dataSource;
        }

        function ok(response: any) {
            return of(new HttpResponse({ status: 200, body: JSON.parse(JSON.stringify(response)) }));
        }

        function updateUsers(keys: any[]) {
            const records = data.filter(element => {
                if (keys.indexOf(element.Id) > -1) {
                    return element;
                }
            });
            if (records) {
                records.forEach(element => {
                    element.FirstName = element.FirstName + ' updated';
                });
            }
            return ok(true);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
