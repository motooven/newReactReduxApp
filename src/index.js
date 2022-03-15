import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./state";



export let rerenderApp = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderApp(store.getState())

store.subscribable(rerenderApp)
