import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IUserState} from "../state/user.state";
import {IUsersState} from "../state/users.state";

const selectUsersStates = (state: IAppState) => state.users;

export const selectUsers = createSelector(
  selectUsersStates,
  (state: IUsersState) => state.users,
);

export const selectLoadUsersInProgress = createSelector(
  selectUsersStates,
  (state: IUsersState) => state.loadUsersInProgress,
);

