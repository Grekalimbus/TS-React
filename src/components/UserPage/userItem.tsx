import React, { FC } from 'react';
import { IUser } from '../../types/types';

interface IUserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<IUserItemProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      style={{ padding: 15, border: '1px solid black' }}
      key={user?.id}
    >
      {user?.id}. {user?.name} проживает в городе {user?.adress?.city} на улице
      {user?.adress?.street}
    </div>
  );
};

export default UserItem;
