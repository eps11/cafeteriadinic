import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogPost } from '../../models/blog-post.model';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
    @Input() blogPost: BlogPost;
    @Output() viewPost = new EventEmitter<null>();
    constructor() {}

    ngOnInit() {
        // console.log(this.blogPost);
    }
}
