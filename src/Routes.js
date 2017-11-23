/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import ProfilePage from './components/profile/ProfilePage';
import CoursePage from './components/course/CoursePage';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/profile" component={ProfilePage}/>
            <Route path="/courses" component={CoursePage}/>
        </Switch>
    );
};


