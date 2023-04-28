import {Action} from "@ngrx/store";
import {IUser} from "../../interfaces/IUser";

export enum UserActionsEnum {
  LoadUser = '[Load user] Load user',
  LoadUserSuccess = '[Load user success] Load user success',
  LoadUserFail = '[Load user fail] Load user fail',
}

export class LoadUser implements Action {
  public readonly type = UserActionsEnum.LoadUser;
  constructor(public payload: number) {}
}

export class LoadUserSuccess implements Action {
  public readonly type = UserActionsEnum.LoadUserSuccess;
  constructor(public payload: IUser) {}
}

export class LoadUserFail implements Action {
  public readonly type = UserActionsEnum.LoadUserFail;
  constructor(public payload: any) {}
}

export type UserActions =
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail;
