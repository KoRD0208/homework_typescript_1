export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UsersProps {
  users: User[];
  inputValue: string;
}

export interface UserProps {
  userProps: User;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
}

export interface SearchProps {
  value: string;
  checkChange: (value: string) => void;
}
