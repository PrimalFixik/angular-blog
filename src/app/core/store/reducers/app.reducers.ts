import {ActionReducerMap} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {postReducers} from "./post.reducers";
import {postsReducers} from "./posts.reducers";
import {userReducers} from "./user.reducers";
import {commentsReducers} from "./comments.reducers";
import {usersReducers} from "./users.reducers";

export const appReducers: ActionReducerMap<IAppState, any> = {
  post: postReducers,
  posts: postsReducers,
  user: userReducers,
  users: usersReducers,
  comments: commentsReducers,
}
