import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    constructor(private http: HttpClient) {}

    public getTopMenuData(): Observable<object> {
        return this.http.get('http://localhost:1337/topmenuitems');
    }

    public getSideMenuData(): Observable<object> {
        return this.http.get('http://localhost:1337/sidemenuitems');
    }

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
