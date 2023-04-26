import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./feature/posts/posts.component";
import {UserDetailsComponent} from "./feature/user-details/user-details.component";
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: "full",
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'user',
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
