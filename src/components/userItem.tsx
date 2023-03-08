import React, { FC } from 'react';
import { IUser } from '../types/types';

interface IUserItemProps {
  user: IUser;
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: '1px solid black' }} key={user.id}>
      {user.id}. {user.name} проживает в городе {user.adress.city} на улице{' '}
      {user.adress.street}
    </div>
  );
};

export default UserItem;
