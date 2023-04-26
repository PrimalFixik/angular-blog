import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {IPostState} from "../state/post.state";

const selectPostStates = (state: IAppState) => state.post;

export const selectPost = createSelector(
  selectPostStates,
  (state: IPostState) => state.post,
);
