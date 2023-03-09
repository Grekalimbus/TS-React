import React, { FC, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { IUser } from '../../types/types';
import axios from 'axios';

interface IUserProps {
  id: string;
}

const User: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<IUserProps>();
  const history = useHistory();
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        'https://jsonplaceholder.typicode.com/users/' + params.id
      );
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h1>Страница пользователя {user?.name}</h1>
      <h3>{user?.email}</h3>
      <h3>
        Проживает в городе {user?.adress?.city} на улице {user?.adress?.street}
      </h3>
      <button onClick={() => history.push('/users')}>Назад</button>
    </div>
  );
};

export default User;
