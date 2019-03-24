import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilitiesService } from '../utilities/utilities.service';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    constructor(private http: HttpClient, private utils: UtilitiesService) {}

    public getTopMenuData(): Observable<object> {
        return this.http.get(`${this.utils.apiRoot}/topmenuitems`);
    }

    public getSideMenuData(): Observable<object> {
        return this.http.get(`${this.utils.apiRoot}/sidemenuitems`);
    }

    // @todo: refactor this to utils
    public redirectToNewTab(url) {
        return window.open(url);
    }
}

export interface APITopMenuData {
    id: number;
    Title: string;
    Link: string;
    Classes: string;
    Styles: object;
    Sort: number;
}

export interface APISideMenuData {
    id: number;
    Title: string;
    MaterialIcon: string;
    RouterOutletLink: string;
    Styles: object;
    Sort: number;
}
