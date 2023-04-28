import {initialUserState, IUserState} from "../state/user.state";
import {UserActions, UserActionsEnum} from "../actions/user.actions";

export function userReducers(
  state = initialUserState,
  action: UserActions,
): IUserState {
  switch (action.type) {
    case UserActionsEnum.LoadUser: {
      return {
        ...state,
        user: null,
        loadUserInProgress: true,
        loadUserError: null,
      };
    }
    case UserActionsEnum.LoadUserSuccess: {
      return {
        ...state,
        user: action.payload,
        loadUserInProgress: false,
        loadUserError: null,
      };
    }
    case UserActionsEnum.LoadUserFail: {
      const errorText = 'Cannot load this user';

      return {
        ...state,
        user: null,
        loadUserInProgress: false,
        loadUserError: errorText,
      };
    }
    default:
      return state;
  }
}
