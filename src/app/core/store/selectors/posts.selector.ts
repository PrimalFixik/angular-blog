import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {IPostsState} from "../state/posts.state";
import {IPostState} from "../state/post.state";

const selectPostsStates = (state: IAppState) => state.posts;

export const selectPosts = createSelector(
  selectPostsStates,
  (state: IPostsState) => state.posts,
);

export const selectPostsLimit = createSelector(
  selectPostsStates,
  (state: IPostsState) => state.limit,
);

export const selectPostsErrors = createSelector(
  selectPostsStates,
  (state: IPostsState) => state.loadPostsError,
);

export const selectPostsTotal = createSelector(
  selectPostsStates,
  (state: IPostsState) => state.total,
)
