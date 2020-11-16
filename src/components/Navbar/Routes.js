import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import pageOne from '../Pages/pageOne';
import pageTwo from '../Pages/pageTwo';
import Notfound from '../Pages/NotFound';

export default function Routes() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/swapi-data" component={pageOne} />
                <Route path="/local-data" component={pageTwo} />
                <Route component={Notfound} />
            </Switch>
        </>
    )
}

