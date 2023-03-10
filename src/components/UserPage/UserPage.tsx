import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../../types/types';
import UserItem from './userItem';
import List from '../common/list';
import axios from 'axios';
import { useHistory } from 'react-router';

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={() => history.push(`/users/${user.id}`)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UserPage;
