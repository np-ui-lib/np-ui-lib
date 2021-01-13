import { ChangeDetectorRef, Injectable, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { NpTranslationsService } from './np-translations.service';

@Injectable()
@Pipe({
    name: 'npTranslate',
    pure: false
})
export class NpTranslatePipe implements PipeTransform, OnDestroy {

    subscription: Subscription;
    value = '';

    constructor(private translationService: NpTranslationsService, private _ref: ChangeDetectorRef) { }

    transform(key: string): any {
        this.subscription = this.translationService.onTranslationsChange.subscribe(() => {
            this.value = this.translationService.translate(key);
            this._ref.markForCheck();
        });
        return this.value;
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
