import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './components/card';
import { CardVariant } from './components/card';
import EventsExamle from './components/eventsExample';
import { BrowserRouter, Route } from 'react-router-dom';
import UserPage from './components/UserPage/UserPage';
import TodosPage from './components/TodosPage/TodosPage';

function App() {
  function changeNumber(num: number): void {
    console.log(0);
  }
  return (
    <div>
      <EventsExamle />
      <Card
        changeNumber={changeNumber}
        variant={CardVariant.primary}
        width={'200px'}
        height={'200px'}
      />
      <UserPage />
      <TodosPage />
    </div>
  );
}

export default App;
