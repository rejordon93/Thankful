export enum ActionType {
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
  SET_LOGOUT = "SET_LOGOUT",
}

export interface User {
  id?: number;
  email: string;
  username: string;
  token?: string;
  firstName?: string;
  lastName?: string;
}

interface ApiRequestContext {
  error: string | null;
  isLoading: boolean;
  success: boolean;
}

export interface UserState {
  apiRequestContext: ApiRequestContext;
  user: User;
}

interface SetUserAction {
  type: ActionType.SET_USER;
  payload: User;
}

interface SetErrorAction {
  type: ActionType.SET_ERROR;
  payload: string | null;
}

interface SetLoadingAction {
  type: ActionType.SET_LOADING;
  payload: boolean;
}

interface SetLogoutAction {
  type: ActionType.SET_LOGOUT;
}

export type Action =
  | SetUserAction
  | SetErrorAction
  | SetLoadingAction
  | SetLogoutAction;

export const AUTH_INITIAL_STATE: UserState = {
  user: {
    email: "",
    username: "",
    token: "",
    firstName: "",
    lastName: "",
  },
  apiRequestContext: {
    error: null,
    isLoading: false,
    success: false,
  },
};

export default function usersReducer(
  state: UserState,
  action: Action
): UserState {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
        apiRequestContext: {
          ...state.apiRequestContext,
          error: null,
          success: true,
        },
      };

    case ActionType.SET_ERROR:
      return {
        ...state,
        apiRequestContext: {
          ...state.apiRequestContext,
          error: action.payload,
          success: false,
        },
      };

    case ActionType.SET_LOADING:
      return {
        ...state,
        apiRequestContext: {
          ...state.apiRequestContext,
          isLoading: action.payload,
        },
      };

    case ActionType.SET_LOGOUT:
      return {
        ...AUTH_INITIAL_STATE,
        apiRequestContext: {
          ...AUTH_INITIAL_STATE.apiRequestContext,
          isLoading: false,
        },
      };

    default:
      return state;
  }
}
