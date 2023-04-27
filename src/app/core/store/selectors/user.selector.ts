import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IPostState} from "../state/post.state";
import {IUserState} from "../state/user.state";

const selectUserStates = (state: IAppState) => state.user;

export const selectUser = createSelector(
  selectUserStates,
  (state: IUserState) => state.user,
);
