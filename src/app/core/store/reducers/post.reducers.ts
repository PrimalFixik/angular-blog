import {initialPostState, IPostState} from "../state/post.state";
import {PostActions, PostActionsEnum} from "../actions/post.actions";

export function postReducers(
  state = initialPostState,
  action: PostActions,
): IPostState {
  switch (action.type) {
    case PostActionsEnum.LoadPost: {
      return {
        ...state,
        post: null,
        loadPostInProgress: true,
        loadPostError: null,
      };
    }
    case PostActionsEnum.LoadPostSuccess: {
      return {
        ...state,
        post: action.payload,
        loadPostInProgress: false,
        loadPostError: null,
      };
    }
    case PostActionsEnum.LoadPostFail: {
      const errorText = 'Cannot load this post';

      return {
        ...state,
        post: null,
        loadPostInProgress: false,
        loadPostError: errorText,
      };
    }
    default:
      return state;
  }
}
