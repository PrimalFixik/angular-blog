import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {PageEvent} from "@angular/material/paginator";
import {IAppState} from "../../core/store/state/app.state";
import {IPost} from "../../core/interfaces/IPost";
import {
  selectLoadPostsInProgress,
  selectPosts,
  selectPostsLimit,
  selectPostsTotal
} from "../../core/store/selectors/posts.selector";
import {
  LoadAllPosts,
  LoadAllPostsOfUser,
  LoadPostsList,
  LoadPostsOfUserList
} from "../../core/store/actions/posts.actions";
import {selectLoadUsersInProgress, selectUsers} from "../../core/store/selectors/users.selector";
import {IUser} from "../../core/interfaces/IUser";
import {LoadUsers} from "../../core/store/actions/users.actions";
import {selectLoadPostInProgress} from "../../core/store/selectors/post.selector";
import {selectLoadUserInProgress} from "../../core/store/selectors/user.selector";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;

  posts$: Observable<Array<IPost>> = this.store.pipe(select(selectPosts));
  users$: Observable<Array<IUser>> = this.store.pipe(select(selectUsers));
  totalPosts$: Observable<number> = this.store.pipe(select(selectPostsTotal));
  postsPageLimit$: Observable<number> = this.store.pipe(select(selectPostsLimit));
  isPostsLoading$: Observable<boolean> = this.store.pipe(select(selectLoadPostsInProgress));
  isUsersLoading$ = this.store.pipe(select(selectLoadUsersInProgress));

  userId: number | undefined;
  pageSize = 9;
  pageIndex = 0;
  startElementIndex = 0;
  pageSizeOptions = [6, 9, 12];
  showFirstLastButtons = true;

  loadPartial() {
    if (this.userId) {
      this.store.dispatch(new LoadPostsOfUserList({
        userId: this.userId,
        start: this.startElementIndex,
        limit: this.pageSize}));
    } else {
      this.store.dispatch(new LoadPostsList({
        start: this.startElementIndex,
        limit: this.pageSize}));
    }
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.startElementIndex = (event.pageIndex) * this.pageSize;

    this.loadPartial();
  }

  constructor(
    private route: ActivatedRoute,
    private readonly store: Store<IAppState>
  ) {}

  getUserName(userId: number, users: any) {
    return userId ? users.find((user: any) => user?.id === userId).username : '';
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadUsers());

    this.routeSubscription = this.route.params.subscribe(params => {
      if (Number(params['id'])) {
        this.store.dispatch(new LoadAllPostsOfUser(Number(params['id'])));
        this.userId = Number(params['id']);
      } else {
        this.store.dispatch(new LoadAllPosts());
      }
    });

    this.loadPartial();
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
