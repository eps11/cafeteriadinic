import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog/blog.service';
import { BlogPost } from '../models/blog-post.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {
    public title = 'Blog Posts';
    public blogPosts: BlogPost[] = [];
    private killTrigger$: Subject<any> = new Subject();

    public sortTypeOptions: SortCategory[] = [
        {
            title: 'Category',
            sortTypes: [
                {
                    title: 'Ascending',
                    value: 'category_asc',
                },
                {
                    title: 'Descending',
                    value: 'category_desc',
                },
            ],
        },
        {
            title: 'Published Date',
            sortTypes: [
                {
                    title: 'Ascending',
                    value: 'created_asc',
                },
                {
                    title: 'Desc',
                    value: 'created_desc',
                },
            ],
        },
    ];

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.initBlogPosts();
    }

    ngOnDestroy(): void {
        // Kill leaky subscriptions.
        this.killTrigger$.next();
    }

    /**
     * Utilises the blog service to consume blog post API data
     * and build the array of BlogPost objects.
     */
    private initBlogPosts(): void {
        this.blogService
            .getBlogPosts()
            .pipe(takeUntil(this.killTrigger$))
            .subscribe((data: APIBlogPost[]) => {
                this.blogPosts = data
                    .sort((item, next) => item.Sort - next.Sort)
                    .map(blogPost => new BlogPost(blogPost));
            });
    }

    viewPost(blogPost: BlogPost) {
        this.blogService.selectedPost = blogPost;
        this.router.navigate([`blog/posts/${blogPost.id}`]);
        // @todo: either expand this card, or provide a router link to render it as full-screen
    }

    /**
     * Sorts blog items through a switch.
     * @param sortItem Handles sorting of blog posts according to user-selected types.
     */
    public sortBlogs(value: string): void {
        switch (value) {
            case 'created_asc':
                this.sortByCreated(true);
                break;
            case 'created_desc':
                this.sortByCreated(false);
                break;
            case 'category_asc':
                this.sortByCategory(true);
                break;
            case 'category_desc':
                this.sortByCategory(false);
        }
    }

    /**
     * Sorts blog posts by created date.
     */
    private sortByCreated(asc: boolean): void {
        this.blogPosts.sort((a, b) =>
            asc
                ? new Date(a.createdDate).valueOf() -
                  new Date(b.createdDate).valueOf()
                : new Date(b.createdDate).valueOf() -
                  new Date(a.createdDate).valueOf()
        );
    }

    /**
     * Sorts blog posts by category (only alphabetically).
     * Pass true to pass in ascending order, or false for descending.
     * @param asc Whether to sort in ascending order.
     */
    private sortByCategory(asc: boolean): void {
        this.blogPosts.sort((a, b) => {
            if (a.category < b.category) {
                return asc ? -1 : 1;
            }
            if (a.category > b.category) {
                return asc ? 1 : -1;
            }
            return 0;
        });
    }
}

/***** Interfaces *****/
/**
 * Expected shape of blog post data from the API.
 */
export interface APIBlogPost {
    id: number;
    Title: string;
    Content: string;
    CoverImage: any;
    Category: string;
    created_at: string;
    updated_at: string;
    Likes: number;
    Dislikes: number;
    Sort: number;
}

export interface SortCategory {
    title: string;
    sortTypes: SortCategoryType[];
}

export interface SortCategoryType {
    value: string;
    title: string;
}
