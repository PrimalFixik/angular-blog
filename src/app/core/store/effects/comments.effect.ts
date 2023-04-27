import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoadUser, LoadUserFail, LoadUserSuccess, UserActionsEnum} from "../actions/user.actions";
import {catchError, of, switchMap, withLatestFrom} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {UserService} from "../../services/user.service";
import {
  CommentsActionsEnum,
  LoadCommentsList,
  LoadCommentsListFail,
  LoadCommentsListSuccess
} from "../actions/comments.actions";
import {CommentService} from "../../services/comment.service";

@Injectable()
export class CommentsEffect {
  loadCommentsList$ = createEffect(() => (
    this.actions.pipe(
      ofType<LoadCommentsList>(CommentsActionsEnum.LoadCommentsList),
      switchMap((action) => {
        return this.commentService
          .getListByPostId(action.payload)
          .pipe(
            switchMap((response: any) =>
              of(new LoadCommentsListSuccess(response)),
            ),
            catchError(err => of(new LoadCommentsListFail(err)))
          );
      }),
    )
  ))
  constructor(
    private readonly actions: Actions,
    private readonly store$: Store<IAppState>,
    private readonly commentService: CommentService,
  ) {}
}
