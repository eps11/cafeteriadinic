import { APIBlogPost } from '../blog/blog.component';

export class BlogPost {
    public id: number;
    public title: string;
    public content: string;
    public category: string;
    public image: object;
    public likes: number;
    public dislikes: number;
    public sort: number;
    public createdDate: string;
    public editedDate: string;
    public colour: string;

    private categoryColourMap = {
        Technology: 'green',
        Programming: 'red',
        Politics: 'blue',
    };

    constructor(post: APIBlogPost) {
        this.id = post.id;
        this.title = post.Title;
        this.content = post.Content;
        this.category = post.Category;
        this.image = post.CoverImage;
        this.likes = post.Likes;
        this.dislikes = post.Dislikes;
        this.sort = post.Sort;
        this.createdDate = post.created_at;
        this.editedDate = post.updated_at;

        this.colour = this.categoryColourMap[this.category];
    }

    /**
     * Returns the content in a formatted way, for view in the blog post selector.
     */
    public getContentShortened() {
        if (this.content.length > 200) {
            return this.content.substring(0, 200) + '...';
        } else {
            return this.content;
        }
    }

    public getIcon() {
        switch (this.category) {
            case 'Technology':
                return 'memory';
                break;
            case 'Programming':
                return 'bug_report';
                break;
            case 'Politics':
                return 'account_balance';
                break;
        }
    }
}
