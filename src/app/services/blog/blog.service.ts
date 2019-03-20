import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../../components/blog/models/blog-post.model';

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    constructor(private http: HttpClient) {}

    public selectedPost: BlogPost;

    public getBlogPosts() {
        return this.http.get('http://localhost:1337/blogposts');
    }

    public getBlogPost(id: string | number) {
        return this.http.get(`http://localhost:1337/blogposts/${id}`);
    }
}
