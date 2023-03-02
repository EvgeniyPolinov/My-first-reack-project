import React, { Component } from 'react';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      {/* <Profile /> */}
      <div className='content'>
        <Dialogs />
      </div>
    </div>
  );
}




export default App;
