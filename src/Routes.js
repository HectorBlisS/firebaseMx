/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';

export const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
        </div>
    );
};


