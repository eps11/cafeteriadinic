import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/layout/home/home.component';
import { PageNotFoundComponent } from '../components/layout/page-not-found/page-not-found.component';
import { BlogComponent } from '../components/blog/blog/blog.component';
import { BlogPostDetailComponent } from '../components/blog/blog/blog-post-detail/blog-post-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'blog',
        component: BlogComponent,
    },
    {
        path: 'blog/posts/:id',
        component: BlogPostDetailComponent,
    },
    { path: 'home', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            enableTracing: false,
        }),
    ],
    exports: [RouterModule],
})
export class RoutingModule {}
