import { APITechnologyItem } from './about.component';

export class TechnologyItem {
    public title: string;
    public logoImage: string;
    public content: string;

    constructor(private technologyItem: APITechnologyItem) {
        this.title = technologyItem.Title;
        this.content = technologyItem.Content;
        this.logoImage = technologyItem.LogoImage
            ? technologyItem.LogoImage.url
            : '';
    }
}
