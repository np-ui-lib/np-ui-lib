import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class DataService {

    constructor(private httpClient: HttpClient) {

    }

    getAll() {
        return this.httpClient.get('/getAll');
    }

    getDataUsingLoadOptions(loadOptions) {
        return this.httpClient.post('/getDataUsingLoadOptions', loadOptions);
    }

    updateFirstName(keys) {
        return this.httpClient.post('/updateFirstName', keys);
    }
}