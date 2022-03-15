import React from 'react';
import './App.css'
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";


const App = (p) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Headers/>
                <Navbar/>
                <Route exact path='/'  render={ ()=> <Profile state={p.state} dispatch={p.dispatch} /> } />
                <Route path='/profile' render={ ()=> <Profile state={p.state} dispatch={p.dispatch} /> } />
                <Route path='/dialogs' render={ ()=> <Dialogs state={p.state} dispatch={p.dispatch} /> } />
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;