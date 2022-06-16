import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import MainPage from './Components/MainPage.js';
import Questions from './Components/Questions.js';
import history from './Components/history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                
                 
                    <Route path="/Home" exact component={MainPage} />
                    <Route path="/questions" component={Questions} />
               
            </Router>
        )
    }
}