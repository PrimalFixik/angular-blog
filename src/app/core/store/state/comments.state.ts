import {IComment} from "../../interfaces/IComment";

export interface ICommentState {
  comments: Array<IComment>;
  loadCommentsInProgress: boolean;
  loadCommentsError: string | null;
  count: number;
}

export const initialCommentState: ICommentState = {
  comments: [],
  loadCommentsInProgress: false,
  loadCommentsError: null,
  count: 0,
};
