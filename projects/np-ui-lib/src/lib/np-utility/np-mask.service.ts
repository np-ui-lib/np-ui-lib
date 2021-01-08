import { Injectable } from '@angular/core';

export interface StringHashMap<T> { [key: string]: T; }

@Injectable()
export class NpMaskService {
    private formatToRegExp: StringHashMap<RegExp> = {
        0: /[0-9]/, a: /[a-z]/, A: /[A-Z]/, B: /[a-zA-Z]/,
    };

    private allFormatsStr = '(' +
        Object.keys(this.formatToRegExp)
            .map(key => this.formatToRegExp[key].toString())
            .map(regexStr => regexStr.substr(1, regexStr.length - 2))
            .join('|')
        + ')';

    private allFormatsGlobal = this.getAllFormatRegexp('g');

    valueToFormat(value: string, format: string, goingBack = false, prevValue?: string): string {
        let maskedValue = '';
        const unmaskedValue = this.unmaskValue(value);
        const isLastCharFormatter = !this.getAllFormatRegexp().test(value[value.length - 1]);
        const isPrevLastCharFormatter = prevValue && !this.getAllFormatRegexp().test(prevValue[prevValue.length - 1]);

        let formatOffset = 0;
        for (let i = 0, maxI = Math.min(unmaskedValue.length, format.length); i < maxI; ++i) {
            const valueChar = unmaskedValue[i];
            let formatChar = format[formatOffset + i];
            let formatRegex = this.getFormatRegexp(formatChar);

            while (formatChar && !formatRegex) {
                maskedValue += formatChar;
                formatChar = format[++formatOffset + i];
                formatRegex = this.getFormatRegexp(formatChar);
            }

            if (valueChar && formatRegex) {
                if (formatRegex.test(valueChar)) {
                    maskedValue += valueChar;
                } else {
                    break;
                }
            }

            const nextFormatChar = format[formatOffset + i + 1];
            const nextFormatRegex = this.getFormatRegexp(nextFormatChar);
            const isLastIteration = i === maxI - 1;

            if (isLastIteration && nextFormatChar && !nextFormatRegex) {
                if (!isLastCharFormatter && goingBack) {
                    if (prevValue && !isPrevLastCharFormatter) {
                        continue;
                    }
                    maskedValue = maskedValue.substr(0, formatOffset + i);
                } else {
                    maskedValue += nextFormatChar;
                }
            }
        }

        return maskedValue;
    }

    unmaskValue(value: string): string {
        const unmaskedMathes = value.match(this.allFormatsGlobal);
        return unmaskedMathes ? unmaskedMathes.join('') : '';
    }

    private getAllFormatRegexp(flags?: string) {
        return new RegExp(this.allFormatsStr, flags);
    }

    private getFormatRegexp(formatChar: string): RegExp | null {
        return formatChar && this.formatToRegExp[formatChar] ? this.formatToRegExp[formatChar] : null;
    }
}
