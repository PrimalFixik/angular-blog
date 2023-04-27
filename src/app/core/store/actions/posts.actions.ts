import {Action} from "@ngrx/store";
import {IPost} from "../../interfaces/IPost";

export enum PostsActionsEnum {
  LoadPostsList = '[Load posts list] Load posts list',
  LoadPostsListSuccess = '[Load posts list success] Load posts list success',
  LoadPostsListFail = '[Load posts list fail] Load posts list fail',

  LoadPostsOfUserList = '[Load posts of user list] Load posts of user list',
  LoadPostsOfUserListSuccess = '[Load posts of user list success] Load posts of user list success',
  LoadPostsOfUserListFail = '[Load posts of user list fail] Load posts of user list fail',

  LoadAllPosts = '[Load all posts] Load all posts',
  LoadAllPostsSuccess = '[Load all posts success] Load all posts success',
  LoadAllPostsFail = '[Load all posts fail] Load all posts fail',

  LoadAllPostsOfUser = '[Load all posts] Load all posts',
  LoadAllPostsOfUserSuccess = '[Load all posts success] Load all posts success',
  LoadAllPostsOfUserFail = '[Load all posts fail] Load all posts fail',
}

// export class LoadFullPostsList implements Action
export class LoadPostsList implements Action {
  public readonly type = PostsActionsEnum.LoadPostsList;
  constructor(public payload: {start: number; limit: number;}) {}
}

export class LoadPostsListSuccess implements Action {
  public readonly type = PostsActionsEnum.LoadPostsListSuccess;
  constructor(public payload: Array<IPost>) {}
}

export class LoadPostsListFail implements Action {
  public readonly type = PostsActionsEnum.LoadPostsListFail;
  constructor(public payload: any) {}
}

export class LoadPostsOfUserList implements Action {
  public readonly type = PostsActionsEnum.LoadPostsOfUserList;
  constructor(public payload: {userId: number; start: number; limit: number;}) {}
}

export class LoadPostsOfUserListSuccess implements Action {
  public readonly type = PostsActionsEnum.LoadPostsOfUserListSuccess;
  constructor(public payload: Array<IPost>) {}
}

export class LoadPostsOfUserListFail implements Action {
  public readonly type = PostsActionsEnum.LoadPostsOfUserListFail;
  constructor(public payload: any) {}
}

export class LoadAllPosts implements Action {
  public readonly type = PostsActionsEnum.LoadAllPosts;
  constructor() {}
}

export class LoadAllPostsSuccess implements Action {
  public readonly type = PostsActionsEnum.LoadAllPostsSuccess;
  constructor(public payload: Array<IPost>) {}
}

export class LoadAllPostsFail implements Action {
  public readonly type = PostsActionsEnum.LoadAllPostsFail;
  constructor(public payload: any) {}
}

export class LoadAllPostsOfUser implements Action {
  public readonly type = PostsActionsEnum.LoadAllPostsOfUser;
  constructor(public payload: number) {}
}

export class LoadAllPostsOfUserSuccess implements Action {
  public readonly type = PostsActionsEnum.LoadAllPostsOfUserSuccess;
  constructor(public payload: Array<IPost>) {}
}

export class LoadAllPostsOfUserFail implements Action {
  public readonly type = PostsActionsEnum.LoadAllPostsOfUserFail;
  constructor(public payload: any) {}
}

export type PostsActions =
  | LoadPostsList
  | LoadPostsListSuccess
  | LoadPostsListFail
  | LoadPostsOfUserList
  | LoadPostsOfUserListSuccess
  | LoadPostsOfUserListFail
  | LoadAllPosts
  | LoadAllPostsSuccess
  | LoadAllPostsFail
  | LoadAllPostsOfUser
  | LoadAllPostsOfUserSuccess
  | LoadAllPostsOfUserFail;
