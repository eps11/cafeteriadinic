import { Injectable, OnInit } from '@angular/core';
import { NavigationData } from '../../components/layout/models/NavigationData';

@Injectable({
    providedIn: 'root',
})
export class SharedNavigationService implements OnInit {
    // Initialise nav data as 'not found'.
    public navData = new NavigationData(
        'Title Not Found',
        'Subtitle Not Found',
        'error'
    );
    constructor() {}

    ngOnInit() {}

    /**
     * Initialise navigation state.
     *
     * @param navData Navigation data object to replace in state.
     */
    public initNavigation(navData: NavigationData): void {
        this.navData = navData;
    }
}
