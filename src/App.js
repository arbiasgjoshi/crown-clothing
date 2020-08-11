import React from 'react';
import './App.css';

import Homepage from './modules/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
)

function App() {
    return (
        <div className="wrapper">
             <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/hats' component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
