import { ActionTypes, BaseAction } from "./base.actions";

export const UPDATE_USER_NAME = "[USER_PROFILE] Update User Name";

export const createUpdateUserNameAction = (name: string): BaseAction => ({
  type: ActionTypes.UPDATE_USER_NAME,
  payload: name,
});
