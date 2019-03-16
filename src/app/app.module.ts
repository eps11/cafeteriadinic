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
} from '@angular/material';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/layout/home/home.component';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { BlogComponent } from './components/blog/blog/blog.component';

const MatModules = [
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
];

@NgModule({
    declarations: [
        AppComponent,
        TopNavComponent,
        HomeComponent,
        PageNotFoundComponent,
        BlogComponent,
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
