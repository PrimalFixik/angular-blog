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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    PostItemComponent
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
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PostsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
