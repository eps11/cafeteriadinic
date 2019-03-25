import { Component, OnInit } from '@angular/core';
import { NavigationProvider } from '../interfaces/NavigationProvider';
import { SharedNavigationService } from '../../../services/shared-nevigation/shared-navigation.service';
import { NavigationData } from '../models/NavigationData';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, NavigationProvider {
    public navData = new NavigationData('Home', '', 'home');

    constructor(public navService: SharedNavigationService) {}

    ngOnInit() {
        this.navService.initNavigation(this.navData);
    }
}
