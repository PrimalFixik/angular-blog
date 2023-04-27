import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {IComment} from "../../core/interfaces/IComment";
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../core/store/state/app.state";
import {
  selectComments,
  selectCommentsCount,
  selectLoadCommentsInProgress
} from "../../core/store/selectors/comments.selector";
import {LoadCommentsList} from "../../core/store/actions/comments.actions";
import {IPost} from "../../core/interfaces/IPost";
import {selectPost} from "../../core/store/selectors/post.selector";
import {LoadUser} from "../../core/store/actions/user.actions";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {
  postSubsctiption: Subscription;

  post$: Observable<IPost | null> = this.store.pipe(select(selectPost));
  comments$: Observable<Array<IComment>> = this.store.pipe(select(selectComments));
  commentsCount$: Observable<number> = this.store.pipe(select(selectCommentsCount));
  isCommentsLoading$ = this.store.pipe(select(selectLoadCommentsInProgress));

  constructor(
    private route: ActivatedRoute,
    private readonly store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.postSubsctiption = this.post$.subscribe(post => {
      if (post) {
        this.store.dispatch(new LoadCommentsList(post.id));
      }
    })
  }

  ngOnDestroy() {
    this.postSubsctiption.unsubscribe();
  }
}
