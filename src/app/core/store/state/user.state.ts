import {IUser} from "../../interfaces/IUser";

export interface IUserState {
  user: IUser | null;
  loadUserInProgress: boolean;
  loadUserError: string | null;
}

export const initialUserState: IUserState = {
  user: null,
  loadUserInProgress: false,
  loadUserError: null,
};
