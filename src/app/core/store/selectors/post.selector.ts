import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {IPostState} from "../state/post.state";

const selectPostStates = (state: IAppState) => state.post;

export const selectPost = createSelector(
  selectPostStates,
  (state: IPostState) => state.post,
);

export const selectPostError = createSelector(
  selectPostStates,
  (state: IPostState) => state.loadPostError,
);

export const selectLoadPostInProgress = createSelector(
  selectPostStates,
  (state: IPostState) => state.loadPostInProgress,
);
