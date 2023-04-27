import {initialPostsState, IPostsState} from "../state/posts.state";
import {PostsActions, PostsActionsEnum} from "../actions/posts.actions";

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
    case PostsActionsEnum.LoadPostsOfUserList: {
      return {
        ...state,
        posts: [],
        loadPostsInProgress: true,
        loadPostsError: null,
        limit: DEFAULT_LIMIT_FOR_POSTS,
      };
    }
    case PostsActionsEnum.LoadPostsOfUserListSuccess: {
      return {
        ...state,
        posts: action.payload,
        loadPostsInProgress: false,
        loadPostsError: null,
      };
    }
    case PostsActionsEnum.LoadPostsOfUserListFail: {
      const errorText = 'Cannot load posts';

      return {
        ...state,
        posts: [],
        loadPostsInProgress: false,
        loadPostsError: errorText,
        limit: DEFAULT_LIMIT_FOR_POSTS,
      };
    }
    case PostsActionsEnum.LoadAllPosts: {
      return {
        ...state,
        loadPostsInProgress: true,
        loadPostsError: null,
      }
    }
    case PostsActionsEnum.LoadAllPostsSuccess: {
      debugger
      return {
        ...state,
        loadPostsInProgress: false,
        loadPostsError: null,
        total: action.payload.length,
      }
    }
    case PostsActionsEnum.LoadAllPostsFail: {
      const errorText = 'Cannot load posts';

      return {
        ...state,
        posts: [],
        loadPostsInProgress: false,
        loadPostsError: errorText,
        total: 0
      };
    }
    case PostsActionsEnum.LoadAllPostsOfUser: {
      return {
        ...state,
        loadPostsInProgress: true,
        loadPostsError: null,
      }
    }
    case PostsActionsEnum.LoadAllPostsOfUserSuccess: {
      return {
        ...state,
        loadPostsInProgress: false,
        loadPostsError: null,
        total: action.payload.length,
      }
    }
    case PostsActionsEnum.LoadAllPostsOfUserFail: {
      const errorText = 'Cannot load posts';

      return {
        ...state,
        posts: [],
        loadPostsInProgress: false,
        loadPostsError: errorText,
        total: 0
      };
    }
    default:
      return state;
  }
}
