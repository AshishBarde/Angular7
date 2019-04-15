import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    private storageKeys = [''];
    
    static set(key: string, value: any): void {
        if (typeof window.localStorage !== 'undefined') {
            localStorage.setItem(key, value);
        }
    }

    static get(key: string): any {
        if (typeof window.localStorage !== 'undefined') {
            return localStorage.getItem(key);
        }

        return '';
    }

    static remove(key: string): void {
        if (typeof window.localStorage !== 'undefined') {
            localStorage.removeItem(key); 
        }
    }

    static removeAll(uniqueKeys: Array<any>): void {
        if (typeof window.localStorage !== 'undefined') {
            try {
                localStorage.clear();
            }
            catch(e) {
                if (uniqueKeys.length > 0) {
                    uniqueKeys.forEach((item) => {
                        localStorage.removeItem(item);
                    });
                }
                console.log(e);
            }
        }
        
    }
    
}