import React from 'react';

import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import UserPage from './components/UserPage/UserPage';
import TodosPage from './components/TodosPage/TodosPage';
import User from './components/OneUser/User';

class Style {
  constructor(
    public margin: number,
    public border: string,
    public padding: number,
    public background: string,
    public color: string
  ) {}
}

const style = new Style(15, '1px solid #000', 5, '#000', 'white');

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path={'/'} exact>
          <NavLink to={'/users'} style={style}>
            Users
          </NavLink>
          <NavLink to={'/todos'} style={style}>
            Todos
          </NavLink>
        </Route>
        <Route path={'/users'} exact>
          <UserPage />
        </Route>
        <Route path={'/users/:id'}>
          <User />
        </Route>
        <Route path={'/todos'} exact>
          <TodosPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
