import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UtilitiesService {

    public static arrayCollectionByKey(arrayObj: Array<any>, key: string) {
        let values = [];
        arrayObj.forEach((item) => {
            values.push(item[key]);
        });
        return values.join(', ');
    }

    public static limitTo(value: string = '', limit: number) {
        if(value !== '') {
            return value.length > limit ? value.substring(0, limit) : value;
        } else {
            return value;
        }
    }

}