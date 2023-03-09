import React, { FC } from 'react';
import { ITodo } from '../../types/types';
interface ITodosItemProps {
  todo: ITodo;
}

const TodosItem: FC<ITodosItemProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed}></input>
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodosItem;
