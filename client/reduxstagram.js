// let's go!
import React from 'react';

import { render } from 'react-dom';

// Import css
// webpack hanlding all css loading

import css from './styles/style.styl';

//Import Components
import Main from './components/Main';
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

//Import dependencies for react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import binding that allows us to use redux with react
import { Provider } from 'react-redux';


const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)
render(router, document.getElementById('root'));


