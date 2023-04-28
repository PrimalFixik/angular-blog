import {Action} from "@ngrx/store";
import {IComment} from "../../interfaces/IComment";

export enum CommentsActionsEnum {
  LoadCommentsList = '[Load comments list] Load comments list',
  LoadCommentsListSuccess = '[Load comments list success] Load comments list success',
  LoadCommentsListFail = '[Load comments list fail] Load comments list fail',
}

export class LoadCommentsList implements Action {
  public readonly type = CommentsActionsEnum.LoadCommentsList;
  constructor(public payload: number) {}
}

export class LoadCommentsListSuccess implements Action {
  public readonly type = CommentsActionsEnum.LoadCommentsListSuccess;
  constructor(public payload: Array<IComment>) {}
}

export class LoadCommentsListFail implements Action {
  public readonly type = CommentsActionsEnum.LoadCommentsListFail;
  constructor(public payload: any) {}
}

export type CommentsActions =
  | LoadCommentsList
  | LoadCommentsListSuccess
  | LoadCommentsListFail;
