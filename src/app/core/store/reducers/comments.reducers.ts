import {ICommentState, initialCommentState} from "../state/comments.state";
import {CommentsActions, CommentsActionsEnum} from "../actions/comments.actions";

export function commentsReducers(
  state = initialCommentState,
  action: CommentsActions,
): ICommentState {
  switch (action.type) {
    case CommentsActionsEnum.LoadCommentsList: {
      return {
        ...state,
        comments: [],
        loadCommentsInProgress: true,
        loadCommentsError: null,
        count: 0,
      };
    }
    case CommentsActionsEnum.LoadCommentsListSuccess: {
      return {
        ...state,
        comments: action.payload,
        loadCommentsInProgress: false,
        loadCommentsError: null,
        count: action.payload.length,
      };
    }
    case CommentsActionsEnum.LoadCommentsListFail: {
      const errorText = 'Cannot load comments';

      return {
        ...state,
        comments: [],
        loadCommentsInProgress: false,
        loadCommentsError: errorText,
        count: 0,
      };
    }
    default:
      return state;
  }
}
