import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {catchError, of, switchMap} from "rxjs";

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PostService} from "../../services/post.service";
import {IAppState} from "../state/app.state";
import {
  LoadAllPosts,
  LoadAllPostsFail,
  LoadAllPostsOfUser,
  LoadAllPostsOfUserFail,
  LoadAllPostsOfUserSuccess,
  LoadAllPostsSuccess,
  LoadPostsList,
  LoadPostsListFail,
  LoadPostsListSuccess,
  LoadPostsOfUserList,
  LoadPostsOfUserListFail,
  LoadPostsOfUserListSuccess,
  PostsActionsEnum
} from "../actions/posts.actions";
import {LoadPost, LoadPostFail, LoadPostSuccess, PostActionsEnum} from "../actions/post.actions";

@Injectable()
export class PostsEffect {
  loadPostsOfUserPartial$ = createEffect(() => (
    this.actions.pipe(
      ofType<LoadPostsOfUserList>(PostsActionsEnum.LoadPostsOfUserList),
      switchMap(action => {
        return this.postService
          .getPartByUserId(action.payload.userId, action.payload.start, action.payload.limit)
          .pipe(
            switchMap((response: any) =>
              of(new LoadPostsOfUserListSuccess(response)),
            ),
            catchError(err => of(new LoadPostsOfUserListFail(err)))
          );
      }),
    )
  ));

  loadPostsPartial$ = createEffect(() => (
    this.actions.pipe(
      ofType<LoadPostsList>(PostsActionsEnum.LoadPostsList),
      switchMap(action => {
        return this.postService
          .getPart(action.payload.start, action.payload.limit)
          .pipe(
            switchMap((response: any) =>
              of(new LoadPostsListSuccess(response)),
            ),
            catchError(err => of(new LoadPostsListFail(err)))
          );
      }),
    )
  ));

  loadAllPosts$ = createEffect(() => (
    this.actions.pipe(
      ofType<LoadAllPosts>(PostsActionsEnum.LoadAllPosts),
      switchMap(() => {
        return this.postService
          .getAll()
          .pipe(
            switchMap((response: any) =>
              of(new LoadAllPostsSuccess(response))
            ),
            catchError(err => of(new LoadAllPostsFail(err)))
          );
      }),
    )
  ));

  loadAllPostsOfUser$ = createEffect(() => (
    this.actions.pipe(
      ofType<LoadAllPostsOfUser>(PostsActionsEnum.LoadAllPostsOfUser),
      switchMap(action => {
        return this.postService
          .getAllByUserId(action.payload)
          .pipe(
            switchMap((response: any) =>
              of(new LoadAllPostsOfUserSuccess(response)),
            ),
            catchError(err => of(new LoadAllPostsOfUserFail(err)))
          );
      }),
    )
  ));

  loadPost$ = createEffect(() => (
    this.actions.pipe(
      ofType<LoadPost>(PostActionsEnum.LoadPost),
      switchMap(action => {
        return this.postService
          .getById(action.payload)
          .pipe(
            switchMap((response: any) =>
              of(new LoadPostSuccess(response)),
            ),
            catchError(err => of(new LoadPostFail(err)))
          );
      }),
    )
  ));



  constructor(
    private readonly actions: Actions,
    private readonly store$: Store<IAppState>,
    private readonly postService: PostService,
  ) {}
}
