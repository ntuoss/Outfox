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

import { Wrapper, Main } from './style';

const Dashboard = () => (
  <Router>
    <Wrapper>
      {/* prettier-ignore */}
      <SideBar
        routes={dashboardRoutes}
        title="NTU Outfox"
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
        </Switch>
      </Main>
    </Wrapper>
  </Router>
);

export default Dashboard;
