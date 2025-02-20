import { BaseAction, ActionTypes } from "../actions";

export interface UserProfileState {
  name: string;
}

export const createDefaultUserProfileState = (): UserProfileState => ({
  name: "Sin nombre",
});

const handleUpdateUserName = (state: UserProfileState, name: string) => ({
  ...state,
  name,
});

export const userProfileReducer = (
  state: UserProfileState = createDefaultUserProfileState(),
  action: BaseAction
): UserProfileState => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER_NAME:
      return handleUpdateUserName(state, action.payload);
    case ActionTypes.RESET_USER_NAME:
      console.log(`Resetting user name {action.payload}`);
      return {
        ...state,
        name: "Sin nombre",
      };
  }
  return state;
};
