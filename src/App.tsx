import React from 'react';
import Card from './components/card';
import { CardVariant } from './components/card';
import UserList from './components/userList';
import { IUser } from './types/types';

function App() {
  function changeNumber(num: number): void {
    console.log(0);
  }
  const users: IUser[] = [
    {
      id: 1,
      name: 'danil',
      email: 'dan@mail.ru',
      adress: { city: 'moscow', street: 'lenina', zipcode: '123' },
    },
    {
      id: 2,
      name: 'danil2',
      email: 'dan2@mail.ru',
      adress: { city: 'moscow', street: 'lenina', zipcode: '1234' },
    },
  ];
  return (
    <div>
      <Card
        changeNumber={changeNumber}
        variant={CardVariant.primary}
        width={'200px'}
        height={'200px'}
      />
      <UserList users={users} />
    </div>
  );
}

export default App;
