import React, { FC } from 'react';
import { IUser } from '../types/types';
import UserItem from './userItem';

interface IUserListProps {
  users: IUser[];
}

const UserList: FC<IUserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <UserItem user={user} key={user.id} />;
      })}
    </div>
  );
};

export default UserList;
