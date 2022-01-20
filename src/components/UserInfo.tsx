import React from 'react';
import { User } from '../interfaces/types';


interface UserProps {
   userProps: User;
}

function UserInfo({ userProps }: UserProps) {
   return (
      <div className="user">
         <div className="user__name">
            {userProps.name}
         </div>
         <div className="user__username">
            <p>
               Username:
            </p>
            {userProps.username}
         </div>
         <div className="user__email">
            <p>
               E-mail:
            </p>
            {userProps.email}
         </div>
      </div>
   )
}

export default UserInfo;