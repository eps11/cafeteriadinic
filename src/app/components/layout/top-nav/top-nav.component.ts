import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
    APITopMenuData,
    MenuService,
} from '../../../services/menu/menu.service';
import { TopMenuItem } from '../../../models/top-menu-item.model';

@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
    public title = 'La Cafeteria di Nic';
    public menuItems: TopMenuItem[] = [];
    @Output() public sidenavToggle = new EventEmitter<null>();

    constructor(private menuService: MenuService) {}

    ngOnInit() {
        this.initTopMenu();
    }

    private initTopMenu(): void {
        this.menuService
            .getTopMenuData()
            .subscribe(
                (data: APITopMenuData[]) =>
                    (this.menuItems = data.map(
                        menuItem =>
                            new TopMenuItem(
                                menuItem.Title,
                                menuItem.Link,
                                menuItem.Classes,
                                menuItem.Styles
                            )
                    ))
            );
    }
}
