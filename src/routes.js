import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import IndexPage from './components/index/IndexPage';
import ContentPage from './components/content/ContentPage';
import NotFoundPage from './components/error/NotFoundPage';

export default () => (
    <Router>
        <div>
            <Route path="/:project" component={Header} />
            <Switch>
                <Route path="/:project/:slug/:zid" component={ContentPage} />
                <Route path="/:project" component={IndexPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </Router>
);
