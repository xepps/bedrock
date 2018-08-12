import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SearchPage from './components/search/SearchPage';
import NotFoundPage from './components/error/NotFoundPage';

export default () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={SearchPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </Router>
);
