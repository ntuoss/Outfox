import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Page from 'components/Page';

import { DASHBOARD } from 'routes';
import { withFirebase } from 'utils/firebase';
import SigninForm from './components/SigninForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      authUser: null,
    };
  }

  componentDidMount() {
    /* eslint-disable */
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser, authed: true })
        : this.setState({ authUser: null, authed: true });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    if (!this.state.authed) return <div />; // TODO: find other solutions for this.
    return this.state.authUser ? (
      <Redirect to={DASHBOARD} />
    ) : (
      <Page>
        <SigninForm />
      </Page>
    );
  }
}

export default withFirebase(App);
