type UserState = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};

type UserActions = {
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
};

export type UserStore = UserState & UserActions;

