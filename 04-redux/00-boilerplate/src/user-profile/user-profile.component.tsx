import React from "react";

export interface Props {
  name: string;
  onUpdateUserName: (name: string) => void;
}

export const UserProfileComponent: React.FC<Props> = (props) => {
  const { name, onUpdateUserName } = props;
  return (
    <>
      <h2>User profile</h2>
      <div>
        <label>Nombre:</label>
        <span>{name}</span>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => onUpdateUserName(e.target.value)}
        />
      </div>
    </>
  );
};
