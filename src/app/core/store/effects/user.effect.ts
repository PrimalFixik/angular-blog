import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoadPostsList, LoadPostsListFail, LoadPostsListSuccess, PostsActionsEnum} from "../actions/posts.actions";
import {catchError, of, switchMap, withLatestFrom} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {PostService} from "../../services/post.service";
import {LoadUser, LoadUserFail, LoadUserSuccess, UserActionsEnum} from "../actions/user.actions";
import {UserService} from "../../services/user.service";
import {LoadUsers, LoadUsersFail, LoadUsersSuccess, UsersActionsEnum} from "../actions/users.actions";

@Injectable()
export class UserEffect {
  loadUsers$ = createEffect(() => (
    this.actions.pipe(
      ofType<LoadUsers>(UsersActionsEnum.LoadUsers),
      switchMap((action) => {
        return this.userService
          .getAll()
          .pipe(
            switchMap((response: any) =>
              of(new LoadUsersSuccess(response)),
            ),
            catchError(err => of(new LoadUsersFail(err)))
          );
      }),
    )
  ))

  loadUser$ = createEffect(() => (
    this.actions.pipe(
      ofType<LoadUser>(UserActionsEnum.LoadUser),
      switchMap((action) => {
        return this.userService
          .getById(action.payload)
          .pipe(
            switchMap((response: any) =>
              of(new LoadUserSuccess(response)),
            ),
            catchError(err => of(new LoadUserFail(err)))
          );
      }),
    )
  ))
  constructor(
    private readonly actions: Actions,
    private readonly store$: Store<IAppState>,
    private readonly userService: UserService,
  ) {}
}
