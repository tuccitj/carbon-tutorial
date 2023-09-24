import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import AppHeader from './components/AppHeader';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Theme theme="g100">
            <AppHeader />
          </Theme>
          <Content>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/repos" component={RepoPage} />
            </Switch>
          </Content>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
