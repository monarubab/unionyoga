import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Shop from './components/pages/Shop';
import SignUp from './components/pages/SignUp';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/courses' exact component={Courses} />
                    <Route path='/shop' exact component={Shop} />
                    <Route path='/sign-up' exact component={SignUp} />
                </Switch>
            </Router>
        </>
    );
}

export default App;