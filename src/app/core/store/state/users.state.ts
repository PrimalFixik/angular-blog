import {IUser} from "../../interfaces/IUser";

export interface IUsersState {
  users: Array<IUser>;
  loadUsersInProgress: boolean;
  loadUsersError: string | null;
}

export const initialUsersState: IUsersState = {
  users: [],
  loadUsersInProgress: false,
  loadUsersError: null,
};
