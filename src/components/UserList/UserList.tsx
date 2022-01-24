import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import { UsersProps } from "../../types";
import List from "./List/List";

function UserList({ users, inputValue }: UsersProps) {
  return (
    <List>
      {users
        .filter((user) =>
          user.name.toLowerCase().includes(inputValue.toLowerCase().trim())
        )
        .map((user) => {
          return <UserInfo userProps={user} key={user.id} />;
        })}
    </List>
  );
}

export default UserList;
