import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Redux/store";



export let rerenderApp = () => {
    ReactDOM.render(
        <App
            store={store}
            //state={store.getState()}
            //dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderApp(store.getState())

store.subscribe( () => {
    rerenderApp(store.getState())
} )
