import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { APISideMenuData, MenuService } from './services/menu/menu.service';
import { SideMenuItem } from './models/side-menu-item.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
    mobileQuery: MediaQueryList;
    readonly _mobileQueryListener: () => void;
    public menuItems: SideMenuItem[] = [];

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
            .subscribe((data: APISideMenuData[]) => {
                this.menuItems = data
                    .sort((item, next) => item.Sort - next.Sort)
                    .map(
                        menuItem =>
                            new SideMenuItem(
                                menuItem.id,
                                menuItem.Title,
                                menuItem.MaterialIcon,
                                menuItem.RouterOutletLink,
                                menuItem.Styles,
                                menuItem.Sort
                            )
                    );
            });
    }
}
