import {Action} from "@ngrx/store";
import {IPost} from "../../interfaces/IPost";

export enum PostActionsEnum {
  LoadPost = '[Load post] Load post',
  LoadPostSuccess = '[Load post success] Load post success',
  LoadPostFail = '[Load post fail] Load post fail',
}

export class LoadPost implements Action {
  public readonly type = PostActionsEnum.LoadPost;
}

export class LoadPostSuccess implements Action {
  public readonly type = PostActionsEnum.LoadPostSuccess;
  constructor(public payload: IPost) {}
}

export class LoadPostFail implements Action {
  public readonly type = PostActionsEnum.LoadPostFail;
  constructor(public payload: any) {}
}

export type PostActions =
  | LoadPost
  | LoadPostSuccess
  | LoadPostFail;
