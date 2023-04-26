import {ActionReducerMap} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {postReducers} from "./post.reducers";
import {postsReducers} from "./posts.reducers";

export const appReducers: ActionReducerMap<IAppState, any> = {
  post: postReducers,
  posts: postsReducers,
}
