import React, { lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PageLoader from '../components/PageLoader/PageLoader';

const WeatherPage = lazy(() => import('../pages/WeatherHome/WeatherHome'));

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Suspense fallback={<PageLoader />}>
          <Route exact path="/" component={WeatherPage} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;
