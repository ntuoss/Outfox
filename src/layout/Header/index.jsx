import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { AppBar, Toolbar, Title } from './style';

import HeaderLinks from './components/HeaderLink';

function Header(props) {
  const { routes } = props;
  return (
    <AppBar>
      <Toolbar>
        <Title color='transparent' href='#'>
          {
            // prettier-ignore
            (routes.find(item => item.path === props.location.pathname) || { navbarName: ''}).navbarName
          }
        </Title>
        <HeaderLinks />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(Header);
