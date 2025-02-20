export enum ActionTypes {
  UPDATE_USER_NAME = "[USER_PROFILE] Update User Name",
  RESET_USER_NAME = "[USER_PROFILE] Reset User Name",
}

export type BaseAction =
  | {
      type: ActionTypes.UPDATE_USER_NAME;
      payload: string;
    }
  | {
      type: ActionTypes.RESET_USER_NAME;
      payload: number;
    };
