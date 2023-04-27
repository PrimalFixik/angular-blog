import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {ICommentState} from "../state/comments.state";

const selectCommentsStates = (state: IAppState) => state.comments;

export const selectComments = createSelector(
  selectCommentsStates,
  (state: ICommentState) => state.comments,
);

export const selectCommentsError = createSelector(
  selectCommentsStates,
  (state: ICommentState) => state.loadCommentsError,
);

export const selectCommentsCount = createSelector(
  selectCommentsStates,
  (state: ICommentState) => state.count,
);
