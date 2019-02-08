import React from 'react';

import dashboardRoutes from 'routes';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import SideBar from 'layout/SideBar';
import Header from 'layout/Header';
import Footer from 'layout/Footer';

import NotFoundPage from 'containers/NotFound';
import { Wrapper, Main } from './style';

const Dashboard = () => (
  <Router>
    <Wrapper>
      {/* prettier-ignore */}
      <SideBar
        routes={dashboardRoutes}
        title="NTU Iceberx"
      />
      <Main>
        <Header routes={dashboardRoutes} />
        <Switch>
          {dashboardRoutes.map(prop =>
            prop.redirect ? (
              <Redirect from={prop.path} to={prop.to} key={prop.path} />
            ) : (
              <Route {...prop} key={prop.path} />
            ),
          )}
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Main>
    </Wrapper>
  </Router>
);

export default Dashboard;
