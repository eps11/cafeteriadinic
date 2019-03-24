import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilitiesService {
    public apiRoot = 'http://192.168.0.10:1337';
    constructor() {}

    public getFullHostURL(path: string): string {
        return this.apiRoot + path;
    }
}
