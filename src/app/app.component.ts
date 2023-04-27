import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectLoadPostsInProgress} from "./core/store/selectors/posts.selector";
import {selectLoadUserInProgress} from "./core/store/selectors/user.selector";
import {IAppState} from "./core/store/state/app.state";
import {selectLoadPostInProgress} from "./core/store/selectors/post.selector";
import {selectLoadCommentsInProgress} from "./core/store/selectors/comments.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularBlog';

  constructor(private readonly store: Store<IAppState>) {}
}
