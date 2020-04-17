import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import Nav from './components/Nav';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import './containers/App.css';

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
                </Switch>
            </div>
        </Router>
    );
}

export default App;

