import {IPost} from "../../interfaces/IPost";

export interface IPostsState {
  posts: Array<IPost>;
  limit: number;
  loadPostsInProgress: boolean;
  loadPostsError: string | null;
}

export const initialPostsState: IPostsState = {
  posts: [],
  limit: 9,
  loadPostsInProgress: false,
  loadPostsError: null,
};
