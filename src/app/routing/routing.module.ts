import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/layout/home/home.component';
import { PageNotFoundComponent } from '../components/layout/page-not-found/page-not-found.component';
import { BlogComponent } from '../components/blog/blog/blog.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
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
