import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from '../../../../services/blog/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../../models/blog-post.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { APIBlogPost } from '../blog.component';
import { NavigationProvider } from '../../../layout/interfaces/NavigationProvider';
import { NavigationData } from '../../../layout/models/NavigationData';
import { SharedNavigationService } from '../../../../services/shared-nevigation/shared-navigation.service';

@Component({
    selector: 'app-blog-post-detail',
    templateUrl: './blog-post-detail.component.html',
    styleUrls: ['./blog-post-detail.component.scss'],
})
export class BlogPostDetailComponent
    implements OnInit, OnDestroy, NavigationProvider {
    public blogPost: BlogPost;
    private killTrigger$: Subject<any> = new Subject();
    public loaded: Promise<boolean>;
    navData: NavigationData;
    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute,
        private router: Router,
        public navService: SharedNavigationService
    ) {}

    ngOnInit() {
        this.initBlogPost();
    }

    ngOnDestroy(): void {
        this.killTrigger$.next();
    }

    initBlogPost() {
        const id = this.route.snapshot.paramMap.get('id');
        this.blogService
            .getBlogPost(id)
            .pipe(takeUntil(this.killTrigger$))
            .subscribe(
                (postData: APIBlogPost) =>
                    (this.blogPost = new BlogPost(postData)),
                err => err,
                () => {
                    // Set nav data and send it through to the shared service
                    this.navData = new NavigationData(
                        this.blogPost.title,
                        this.blogPost.category,
                        this.blogPost.getIcon()
                    );
                    this.navService.initNavigation(this.navData);
                    this.loaded = Promise.resolve(true);
                }
            );
    }
}
