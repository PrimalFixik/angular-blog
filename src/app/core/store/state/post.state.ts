import {IPost} from "../../interfaces/IPost";

export interface IPostState {
  post: IPost | null;
  loadPostInProgress: boolean;
  loadPostError: string | null;
}

export const initialPostState: IPostState = {
  post: null,
  loadPostInProgress: false,
  loadPostError: null,
};
