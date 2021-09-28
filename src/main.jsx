import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/home';
import List from './pages/list';
import Write from './pages/write';
import Test from './test/index';

class Main extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Route exact path="/" component={Home} />
                <Route path="/list" component={List} />
                <Route path="/write" component={Write} />
                <Route path="/test" component={Test} />
            </div>
        );
    }
}

export default Main;