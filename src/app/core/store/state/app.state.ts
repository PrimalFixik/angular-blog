import {initialPostsState, IPostsState} from "./posts.state";
import {initialPostState, IPostState} from "./post.state";

export interface IAppState {
  post: IPostState;
  posts: IPostsState;
}

export const initialAppState = {
  post: initialPostState,
  posts: initialPostsState,
}
