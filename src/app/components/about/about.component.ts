import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../services/utilities/utilities.service';
import { AboutService } from '../../services/about/about.service';
import { TechnologyItem } from './technology-item.model';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    title = 'About Me';
    public technologyItems: TechnologyItem[];
    constructor(
        public utils: UtilitiesService,
        private aboutService: AboutService
    ) {}

    ngOnInit() {
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
