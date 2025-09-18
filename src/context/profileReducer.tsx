export enum ActionType {
  SET_PROFILE = "SET_PROFILE",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
}

export interface Profile {
  firstName: string;
  lastName: string;
  title: string;
  profileImage?: string;
  phone: string;
}

interface ApiRequestContext {
  error: string | null;
  isLoading: boolean;
  success: boolean;
}

export interface ProfileState {
  apiRequestContext: ApiRequestContext;
  profile: Profile;
}

interface SetProfileAction {
  type: ActionType.SET_PROFILE;
  payload: Profile;
}

interface SetErrorAction {
  type: ActionType.SET_ERROR;
  payload: string | null;
}

interface SetLoadingAction {
  type: ActionType.SET_LOADING;
  payload: boolean;
}

export type ProfileAction =
  | SetProfileAction
  | SetErrorAction
  | SetLoadingAction;

export const PROFILE_INITIAL_STATE: ProfileState = {
  profile: {
    title: "",
    profileImage: "",
    phone: "",
    firstName: "",
    lastName: "",
  },
  apiRequestContext: {
    error: null,
    isLoading: false,
    success: false,
  },
};

export default function profileReducer(
  state: ProfileState,
  action: ProfileAction
): ProfileState {
  switch (action.type) {
    case ActionType.SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
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
    default:
      return state;
  }
}
