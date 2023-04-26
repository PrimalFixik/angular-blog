import {Action} from "@ngrx/store";
import {IPost} from "../../interfaces/IPost";

export enum PostsActionsEnum {
  LoadPostsList = '[Load posts list] Load posts list',
  LoadPostsListSuccess = '[Load posts list success] Load posts list success',
  LoadPostsListFail = '[Load posts list fail] Load posts list fail',
}

export class LoadPostsList implements Action {
  public readonly type = PostsActionsEnum.LoadPostsList;
}

export class LoadPostsListSuccess implements Action {
  public readonly type = PostsActionsEnum.LoadPostsListSuccess;
  constructor(public payload: Array<IPost>) {}
}

export class LoadPostsListFail implements Action {
  public readonly type = PostsActionsEnum.LoadPostsListFail;
  constructor(public payload: any) {}
}

export type PostsActions =
  | LoadPostsList
  | LoadPostsListSuccess
  | LoadPostsListFail;
