import {initialUserState, IUserState} from "../state/user.state";
import {UserActions, UserActionsEnum} from "../actions/user.actions";
import {initialUsersState, IUsersState} from "../state/users.state";
import {UsersActions, UsersActionsEnum} from "../actions/users.actions";

export function usersReducers(
  state = initialUsersState,
  action: UsersActions,
): IUsersState {
  switch (action.type) {
    case UsersActionsEnum.LoadUsers: {
      return {
        ...state,
        users: [],
        loadUsersInProgress: true,
        loadUsersError: null,
      };
    }
    case UsersActionsEnum.LoadUsersSuccess: {
      return {
        ...state,
        users: action.payload,
        loadUsersInProgress: false,
        loadUsersError: null,
      };
    }
    case UsersActionsEnum.LoadUsersFail: {
      const errorText = 'Cannot load this user';

      return {
        ...state,
        users: [],
        loadUsersInProgress: false,
        loadUsersError: errorText,
      };
    }
    default:
      return state;
  }
}
