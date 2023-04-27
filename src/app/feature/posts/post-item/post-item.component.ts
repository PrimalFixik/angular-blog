import {AfterContentInit, AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IPost} from "../../../core/interfaces/IPost";
import {LoadPostsList} from "../../../core/store/actions/posts.actions";
import {Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectPosts} from "../../../core/store/selectors/posts.selector";
import {IAppState} from "../../../core/store/state/app.state";
import {LoadUser} from "../../../core/store/actions/user.actions";
import {IUser} from "../../../core/interfaces/IUser";
import {selectUser} from "../../../core/store/selectors/user.selector";
import {selectPost} from "../../../core/store/selectors/post.selector";
import {LoadPost} from "../../../core/store/actions/post.actions";
import {IComment} from "../../../core/interfaces/IComment";
import {selectComments, selectCommentsCount} from "../../../core/store/selectors/comments.selector";
import {LoadCommentsList} from "../../../core/store/actions/comments.actions";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements AfterContentInit{
  @Input() post: IPost;
  @Input() userName: string;

  user$: Observable<IUser | null> = this.store.pipe(select(selectUser));
  commentsCount$: Observable<number> = this.store.pipe(select(selectCommentsCount));

  constructor(private readonly store: Store<IAppState>) {}

  ngAfterContentInit() {
    this.store.dispatch(new LoadCommentsList(this.post.id))
  }
}
