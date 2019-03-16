import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog/blog.service';
import { BlogPost } from '../models/blog-post.model';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
    public blogPosts: BlogPost[] = [];
    constructor(private blogService: BlogService) {}

    ngOnInit() {
        this.initBlogPosts();
    }

    private initBlogPosts() {
        this.blogService
            .getBlogPosts()
            .subscribe(
                (data: APIBlogPost[]) =>
                    (this.blogPosts = data.map(
                        blogPost =>
                            new BlogPost(
                                blogPost.Title,
                                blogPost.Content,
                                blogPost.Category,
                                blogPost.CoverImage,
                                blogPost.Likes,
                                blogPost.Dislikes
                            )
                    )),
                err => err,
                () => console.log(this.blogPosts)
            );
    }
}

export interface APIBlogPost {
    Title: string;
    Content: string;
    CoverImage: object;
    Category: string;
    Created: string;
    Likes: number;
    Dislikes: number;
}
