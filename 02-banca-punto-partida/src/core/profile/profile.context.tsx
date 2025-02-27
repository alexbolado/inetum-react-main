import React from "react";

interface Context {
  username: string;
  setUserProfile: (userProfile: string) => void;
}

const noUserLogin = "No user login";

const ProfileContext = React.createContext<Context>({
  username: noUserLogin,
  setUserProfile: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ProfileProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [userProfile, setUserProfile] = React.useState<string>(noUserLogin);

  return (
    <ProfileContext.Provider value={{ username: userProfile, setUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => React.useContext(ProfileContext);
