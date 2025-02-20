import { combineReducers } from "redux";
import { userProfileReducer, UserProfileState } from "./user-profile.reducer";

export interface AppState {
  userProfile: UserProfileState;
}

export const rootReducer = combineReducers<AppState>({
  userProfile: userProfileReducer,
});
