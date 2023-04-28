import {IPost} from "../../interfaces/IPost";

export interface IPostsState {
  posts: Array<IPost>;
  limit: number;
  total: number;
  loadPostsInProgress: boolean;
  loadPostsError: string | null;
}

export const initialPostsState: IPostsState = {
  posts: [],
  limit: 9,
  total: 0,
  loadPostsInProgress: false,
  loadPostsError: null,
};
