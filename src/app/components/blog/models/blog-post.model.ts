export class BlogPost {
    constructor(
        public title: string,
        public content: string,
        public category: string,
        public image: object,
        public likes: number,
        public dislikes: number
    ) {}
}
