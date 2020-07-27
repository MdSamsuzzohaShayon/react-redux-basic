import React from 'react';
import { Provider } from 'react-redux';
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HooksCakeContainer" ;
import IceCreamContainer from './components/IceCreamContainer';
import './App.css';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App" >
                <CakeContainer />
                <HookCakeContainer />
                <IceCreamContainer />
            </div>
        </Provider>
    );
}

export default App;