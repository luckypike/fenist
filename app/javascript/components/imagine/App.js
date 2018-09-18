import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import { UserContext } from '../Context/UserContext';
// import { AuthTokenContext } from '../Context/AuthTokenContext';
// import { I18nContext } from '../Context/I18nContext';
import { RoutesContext } from '../Context/RoutesContext';

import Header from './Header';
import Index from './Index';
import Speakers from './Speakers';

import { Helmet } from 'react-helmet';

// import routes from '../packs/routes.js.erb';

class App extends React.Component {
  render () {
    const { routes } = this.props;

    return (
      <React.Fragment>
        <Helmet
          defaultTitle={this.props.title}
          titleTemplate={`%s — ${this.props.title}`}
        />
        <RoutesContext.Provider value={routes}>
          <Router>
            <React.Fragment>
              <Header title={this.props.fest.title} />

              <Switch>
                <Route path={routes.fest_path} component={Index} exact strict />
                <Route path={routes.speakers_path} component={Speakers} exact strict />
              </Switch>
            </React.Fragment>
          </Router>
        </RoutesContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
