import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { YMInitializer } from 'react-yandex-metrika'

import Index from './Index'
import Speakers from './Speakers'
import Partners from './Partners'
import Header from './Header'

export default function App ({ title, fest, routes }) {
  return (
    <HelmetProvider>
      <Helmet
        defaultTitle={title}
        titleTemplate={`%s — ${title}`}
      />

      <Router>
        <>
          <Header routes={routes} />

          <Switch>
            <Route path={routes.fest_path} render={() => <Index routes={routes} />} exact strict />
            <Route path={routes.speakers_path} render={() => <Speakers routes={routes} />} exact strict />
            <Route path={routes.partners_path} render={() => <Partners routes={routes} />} exact strict />
          </Switch>

          <YMInitializer
            accounts={[37095775]}
            version="2"
            options={{
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
              trackHash: true,
            }}
          />
        </>
      </Router>
    </HelmetProvider>
  )
}
