import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import {Route, Routes} from 'react-router-dom'
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Friends from './Components/Friends/Friends';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import { Login } from './Components/Login/Login';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='content'>
          <Routes>
            <Route index element={<ProfileContainer />} />
            <Route path='/profile/:profileId?' element={<ProfileContainer />}/>
            <Route path='/dialogs/*' element={<DialogsContainer />}/>
            <Route path='/friends/*' element={<Friends />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
