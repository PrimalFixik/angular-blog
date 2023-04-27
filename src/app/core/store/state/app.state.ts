import {initialPostsState, IPostsState} from "./posts.state";
import {initialPostState, IPostState} from "./post.state";
import {ICommentState, initialCommentState} from "./comments.state";
import {initialUserState, IUserState} from "./user.state";
import {initialUsersState, IUsersState} from "./users.state";

export interface IAppState {
  post: IPostState;
  posts: IPostsState;
  user: IUserState;
  users: IUsersState;
  comments: ICommentState;

}

export const initialAppState = {
  post: initialPostState,
  posts: initialPostsState,
  user: initialUserState,
  users: initialUsersState,
  comments: initialCommentState,
}
