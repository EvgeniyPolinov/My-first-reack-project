import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import {Route, Routes} from 'react-router-dom'



const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='content'>
          <Routes>
            <Route path='/profile/' element={<Profile store={props.store}/>}/>
            <Route path='/dialogs/*' element={<Dialogs  state={props.state.messagesPage}
                                                      dispatch={props.dispatch}
                                                      newMessageText={props.state.messagesPage.newMessageText}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
