import React from 'react';
import './App.css'
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Route from "react-router-dom/Route";


const App = () => {
console.log('App')
    return (
        <div className='app-wrapper'>
            <Headers/>
            <Navbar/>
            <Route exact path='/'  render={() => <Profile/>}/>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/dialogs' render={ ()=> <DialogsContainer /> } />
            <Footer/>
        </div>
    )
}

export default App;