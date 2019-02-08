import React from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Icon } from '@material-ui/core';

import Logo from 'components/Logo';
import {
  Drawer,
  SideBarHeader,
  List,
  NavLink,
  ListItem,
  ListItemIcon,
  ListItemText,
} from './style';

const Sidebar = props => {
  const { title, routes, location } = props;
  return (
    // TODO: responsive design with <Hidden />
    <Drawer anchor='left' variant='permanent' open>
      <SideBarHeader>
        <Logo size='3.2rem' />
        <span>{title}</span>
      </SideBarHeader>
      <List>
        {routes.map(item => {
          if (item.redirect || item.headerRoute) return null;
          return (
            <NavLink location={location} to={item.path} key={item.path}>
              <ListItem button>
                <ListItemIcon>
                  {typeof item.icon === 'string' ? (
                    <Icon>{item.icon}</Icon>
                  ) : (
                    <item.icon />
                  )}
                </ListItemIcon>
                <ListItemText primary={item.sidebarName} />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(Sidebar);
