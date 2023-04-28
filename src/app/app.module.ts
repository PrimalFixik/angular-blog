import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PostsComponent } from './feature/posts/posts.component';
import { UserDetailsComponent } from './feature/user-details/user-details.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";
import { PostItemComponent } from './feature/posts/post-item/post-item.component';
import {MatCardModule} from "@angular/material/card";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {appReducers} from "./core/store/reducers/app.reducers";
import {PostsEffect} from "./core/store/effects/posts.effect";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {UserEffect} from "./core/store/effects/user.effect";
import {CommentsEffect} from "./core/store/effects/comments.effect";
import { PostDetailsComponent } from './feature/post-details/post-details.component';
import { CommentsComponent } from './feature/comments/comments.component';
import { CommentItemComponent } from './feature/comments/comment-item/comment-item.component';
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    PostItemComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentItemComponent,
    LoaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PostsEffect, UserEffect, CommentsEffect]),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
