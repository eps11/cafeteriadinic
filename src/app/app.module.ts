import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';

import {
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatDividerModule,
} from '@angular/material';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/layout/home/home.component';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { BlogComponent } from './components/blog/blog/blog.component';
import { BlogPostComponent } from './components/blog/blog/blog-post/blog-post.component';
import { BlogPostDetailComponent } from './components/blog/blog/blog-post-detail/blog-post-detail.component';
import { AboutComponent } from './components/about/about.component';
import { FinanceCalculatorComponent } from './components/finance-calculator/finance-calculator.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

const MatModules = [
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatDividerModule,
    ScrollingModule,
];

@NgModule({
    declarations: [
        AppComponent,
        TopNavComponent,
        HomeComponent,
        PageNotFoundComponent,
        BlogComponent,
        BlogPostComponent,
        BlogPostDetailComponent,
        AboutComponent,
        FinanceCalculatorComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        HttpClientModule,
        ...MatModules,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
