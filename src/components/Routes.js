import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {
    home,
    weddingParty,
    schedule,
    lodgingTravel,
    registry,
    ceremonyProgram,
    photos,
    faq,
    rsvp
} from '../content/nav.json';
import Home from './pages/Home';
import WeddingParty from './pages/WeddingParty';
import Schedule from './pages/Schedule';
import LodgingTravel from './pages/LodgingTravel';
import Registry from './pages/Registry';
import CeremonyProgram from './pages/CeremonyProgram';
import Photos from './pages/Photos';
import FAQ from './pages/FAQ';
import RSVP from './pages/RSVP';
import Nav from './nav/Nav';

const Routes = () => (
    <Router>
        <Nav />
        <Switch>
            <Route exact path={home.url} component={Home} />
            <Route exact path={rsvp.url} component={RSVP} />
            <Route exact path={weddingParty.url} component={WeddingParty} />
            <Route exact path={schedule.url} component={Schedule} />
            <Route exact path={lodgingTravel.url} component={LodgingTravel} />
            <Route exact path={registry.url} component={Registry} />
            <Route exact path={ceremonyProgram.url} component={CeremonyProgram} />
            <Route exact path={photos.url} component={Photos} />
            <Route exact path={faq.url} component={FAQ} />
            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    </Router>
);

export default Routes;