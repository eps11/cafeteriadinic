import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilitiesService } from '../utilities/utilities.service';

@Injectable({
    providedIn: 'root',
})
export class AboutService {
    constructor(private http: HttpClient, private utils: UtilitiesService) {}

    /**
     * Returns all technology items.
     * @param url The URL to query.
     */
    public getTechnologyItems(): Observable<any> {
        return this.http.get(this.utils.getFullHostURL('technologyitems'));
    }
}
