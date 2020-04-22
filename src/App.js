import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import Nav from './components/Nav';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AddItem from "./components/AddItem";
import './containers/App.css';
import {Account} from "./components/Account";
import Collection from "./components/Collection";
import Item from "./components/Item";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/sign-in' component={SignIn} />
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/additem' component={AddItem} />
                    <Route path='/account' component={Account} />
                    <Route path='/collection' component={Collection} />
                    <Route path='/item' component={Item} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

