import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PostService} from "../../services/post.service";
import {IAppState} from "../state/app.state";
import {LoadPostsList, LoadPostsListFail, LoadPostsListSuccess, PostsActionsEnum} from "../actions/posts.actions";
import {catchError, of, switchMap, withLatestFrom} from "rxjs";

@Injectable()
export class PostsEffect {
  loadMore$ = createEffect(() => (
    this.actions.pipe(
      ofType<LoadPostsList>(PostsActionsEnum.LoadPostsList),
      withLatestFrom(this.store$),
      switchMap(([action, storeState]) => {
        return this.postService
          .getAll()
          .pipe(
            switchMap((response: any) =>
              of(new LoadPostsListSuccess(response)),
            ),
            catchError(err => of(new LoadPostsListFail(err)))
          );
      }),
    )
  ))
  constructor(
    private readonly actions: Actions,
    private readonly store$: Store<IAppState>,
    private readonly postService: PostService,
  ) {}
}
