import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UtilitiesService {
    constructor() {}

    /**
     * Provides the full host URL for the provided path.
     *
     * @param path Path from host, i.e 'items/1/'
     */
    public getFullHostURL(path: string): string {
        return environment.apiRoot + path;
    }
}
