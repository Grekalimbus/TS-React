import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './components/card';
import { CardVariant } from './components/card';
import List from './components/list';
import UserItem from './components/userItem';
import UserList from './components/userList';
import { IUser } from './types/types';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
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

  function changeNumber(num: number): void {
    console.log(0);
  }
  return (
    <div>
      <Card
        changeNumber={changeNumber}
        variant={CardVariant.primary}
        width={'200px'}
        height={'200px'}
      />
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </div>
  );
}

export default App;
