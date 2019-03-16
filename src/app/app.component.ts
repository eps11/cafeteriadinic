import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {
    APISideMenuData,
    APITopMenuData,
    MenuService,
} from './services/menu/menu.service';
import { TopMenuItem } from './models/top-menu-item.model';
import { SideMenuItem } from './models/side-menu-item.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
    mobileQuery: MediaQueryList;
    readonly _mobileQueryListener: () => void;
    public menuItems = [];

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private menuService: MenuService
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
        this.initSideMenu();
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    private initSideMenu(): void {
        this.menuService
            .getSideMenuData()
            .subscribe(
                (data: APISideMenuData[]) =>
                    (this.menuItems = data.map(
                        menuItem =>
                            new SideMenuItem(
                                menuItem.Title,
                                menuItem.MaterialIcon,
                                menuItem.RouterOutletLink,
                                menuItem.Styles
                            )
                    ))
            );
    }
}
