import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './modules/homepage/homepage.component';
import ShopPage from './modules/shop/shop.component';
import Header from './shared/header/header.component';

import AuthPage from './modules/auth/auth.component';

import {auth} from  './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
            this.setState({currentUser: user});

            console.log(user);
        }) 
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="wrapper">
                <Header currentUser={this.state.currentUser} /> 
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/signin' component={AuthPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
