import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import {Route, Routes} from 'react-router-dom'
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Friends from './Components/Friends/Friends';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='content'>
          <Routes>
            <Route index element={<Profile />} />
            <Route path='/profile/' element={<Profile />}/>
            <Route path='/dialogs/*' element={<DialogsContainer />}/>
            <Route path='/friends/*' element={<Friends />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
