import React from 'react';
import './App.css'
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (p) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Headers/>
                <Navbar/>
                <Route exact path='/'  render={ ()=> <Profile store={p.store} /> } />
                <Route path='/profile' render={ ()=> <Profile store={p.store} /> } />
                <Route path='/dialogs' render={ ()=> <DialogsContainer store={p.store} /> } />
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;