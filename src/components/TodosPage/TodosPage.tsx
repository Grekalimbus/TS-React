import React, { FC, useState, useEffect } from 'react';
import { ITodo } from '../../types/types';
import List from '../common/list';
import axios from 'axios';
import TodosItem from './todosItem';

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      );
      setTodos(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodosItem todo={todo} />}
    />
  );
};

export default TodosPage;
