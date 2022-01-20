import React from 'react';
import UserInfo from './UserInfo';
import { User } from '../interfaces/types';

interface UsersProps {
   users: User[];
   inputValue: string;
}

function UserList({ users, inputValue }: UsersProps) {
   return (
      <div className="users">
         {
            users
               .filter(user => user.name.toLowerCase().includes(inputValue.toLowerCase().trim()))
               .map(user => {
                  return <UserInfo userProps={user} key={user.id} />
               })}
      </div>
   )
}

export default UserList;