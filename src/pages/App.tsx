import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { NoMatch, ErrorBoundary } from 'components';
import Css from './css/Css';
import Styled from './styled/Styled';

class App extends React.Component<any> {
  render() {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <Switch>
            <Route path="/css" component={Css} />
            <Route path="/styled" component={Styled} />
            <Route exact path="/" render={() => <Redirect to="/css" />} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

export default hot(module)(App);
