import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./feature/posts/posts.component";
import {UserDetailsComponent} from "./feature/user-details/user-details.component";
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";
import {BrowserModule} from "@angular/platform-browser";
import {PostDetailsComponent} from "./feature/post-details/post-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: "full",
  },
  { path: 'post/:id', component: PostDetailsComponent },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
