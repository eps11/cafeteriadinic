export class SideMenuItem {
    constructor(
        public id: number,
        public title: string,
        public matIcon: string,
        public routerLink: string,
        public styles: object,
        public sort: number
    ) {}
}
