import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { NoMatch } from 'components';
import { Login } from './container';

class App extends React.Component<any> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/css/login" component={Login} />
          <Route
            exact
            path="/css"
            render={() => <Redirect to="/css/login" />}
          />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
