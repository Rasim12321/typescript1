import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import { EventsExample } from './components/EventsExample';
import { UsersPage } from './components/UsersPage';
import { TodosPage } from './components/TodosPage';
import Rest from './components/Rest';
import { UserItemPage } from './components/UserItemPage';
import { TodoItemPage } from './components/TodoItemPage';

import './App.css';


const App: React.FC = () => {
console.log()
  return (
    <>
      <BrowserRouter>
        <div>
          <NavLink className={'m-3'} to={'/users'}>users</NavLink>
          <NavLink className={'m-3'} to={'/todos'}>todos</NavLink>
          <NavLink className={'m-3'} to={'/events'}>events</NavLink>
          <NavLink className={'m-3'} to={'/rest'}>events</NavLink>
        </div>
        <Routes>
          <Route path='/users' element={<UsersPage/>}> </Route>
          <Route path='/users/:id' element={<UserItemPage/>}> </Route>

          <Route path ='/todos' element={<TodosPage />}> </Route>
          <Route path ='/todos/:id' element={<TodoItemPage />}> </Route>

          <Route path ='/events' element={<EventsExample />}> </Route>
          <Route path ='/rest' element={<Rest />}> </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
