import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../../components/blog/models/blog-post.model';
import { UtilitiesService } from '../utilities/utilities.service';

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    constructor(private http: HttpClient, private utils: UtilitiesService) {}

    public selectedPost: BlogPost;

    /**
     * Gets all blog posts.
     */
    public getBlogPosts() {
        return this.http.get(this.utils.getFullHostURL('blogposts'));
    }

    /**
     * Gets a specific blog post.
     * @param id The ID of the blog post to retrieve.
     */
    public getBlogPost(id: string | number) {
        return this.http.get(this.utils.getFullHostURL('blogposts/${id}'));
    }
}
