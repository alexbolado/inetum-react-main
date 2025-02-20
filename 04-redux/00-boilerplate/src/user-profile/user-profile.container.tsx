import { connect } from "react-redux";
import { AppState } from "../reducers";
import { UserProfileComponent } from "./user-profile.component";
import { Dispatch } from "redux";
import { BaseAction, createUpdateUserNameAction } from "../actions";

const mapStateToProps = (state: AppState) => ({
  name: state.userProfile.name,
});

const mapDispatchToProps = (dispatch: Dispatch<BaseAction>) => ({
  onUpdateUserName: (name: string) =>
    dispatch(createUpdateUserNameAction(name)),
});

export const UserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileComponent);
