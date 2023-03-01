import React, { Component } from 'react';
import './App.css';
import Header from './Helpers/Header';
import Nav from './Helpers/Nav';
import Profile from './Helpers/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}




export default App;
