import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../services/utilities/utilities.service';
import { AboutService } from '../../services/about/about.service';
import { TechnologyItem } from './technology-item.model';
import { NavigationProvider } from '../layout/interfaces/NavigationProvider';
import { SharedNavigationService } from '../../services/shared-nevigation/shared-navigation.service';
import { NavigationData } from '../layout/models/NavigationData';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, NavigationProvider {
    title = 'About Me';
    public technologyItems: TechnologyItem[];
    navData = new NavigationData('About', 'Is a subtitle necessary?', 'face');
    constructor(
        public utils: UtilitiesService,
        private aboutService: AboutService,
        public navService: SharedNavigationService
    ) {}

    ngOnInit() {
        this.navService.initNavigation(this.navData);
        this.initTechnologyItems();
    }

    /**
     * Initializes the items for display on this page.
     */
    initTechnologyItems() {
        this.aboutService
            .getTechnologyItems()
            .subscribe(
                (data: APITechnologyItem[]) =>
                    (this.technologyItems = data.map(
                        item => new TechnologyItem(item)
                    ))
            );
    }
}

export interface APITechnologyItem {
    Title: string;
    LogoImage: any;
    Content: string;
}
