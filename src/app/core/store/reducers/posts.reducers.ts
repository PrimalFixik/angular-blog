import {initialPostsState, IPostsState} from "../state/posts.state";
import {PostsActions, PostsActionsEnum} from "../actions/posts.actions";
import {error} from "@angular/compiler-cli/src/transformers/util";

export const DEFAULT_LIMIT_FOR_POSTS = 9;

export function postsReducers(
  state = initialPostsState,
  action: PostsActions,
): IPostsState {
  switch (action.type) {
    case PostsActionsEnum.LoadPostsList: {
      return {
        ...state,
        posts: [],
        loadPostsInProgress: true,
        loadPostsError: null,
        limit: DEFAULT_LIMIT_FOR_POSTS,
      };
    }
    case PostsActionsEnum.LoadPostsListSuccess: {
      return {
        ...state,
        posts: action.payload,
        loadPostsInProgress: false,
        loadPostsError: null,
      };
    }
    case PostsActionsEnum.LoadPostsListFail: {
      const errorText = 'Cannot load posts';

      return {
        ...state,
        posts: [],
        loadPostsInProgress: false,
        loadPostsError: errorText,
        limit: DEFAULT_LIMIT_FOR_POSTS,
      };
    }
    default:
      return state;
  }
}
