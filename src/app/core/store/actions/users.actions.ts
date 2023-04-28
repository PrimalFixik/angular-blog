import {Action} from "@ngrx/store";
import {IUser} from "../../interfaces/IUser";

export enum UsersActionsEnum {
  LoadUsers = '[Load users] Load users',
  LoadUsersSuccess = '[Load users success] Load users success',
  LoadUsersFail = '[Load users fail] Load users fail',
}

export class LoadUsers implements Action {
  public readonly type = UsersActionsEnum.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  public readonly type = UsersActionsEnum.LoadUsersSuccess;
  constructor(public payload: Array<IUser>) {}
}

export class LoadUsersFail implements Action {
  public readonly type = UsersActionsEnum.LoadUsersFail;
  constructor(public payload: any) {}
}

export type UsersActions =
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail;
