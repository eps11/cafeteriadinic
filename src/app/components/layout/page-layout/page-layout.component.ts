import { Component, OnInit } from '@angular/core';
import { SharedNavigationService } from '../../../services/shared-nevigation/shared-navigation.service';

@Component({
    selector: 'app-page-layout',
    templateUrl: './page-layout.component.html',
    styleUrls: ['./page-layout.component.scss'],
})
export class PageLayoutComponent implements OnInit {
    constructor(public navigation: SharedNavigationService) {}

    ngOnInit() {}
}
