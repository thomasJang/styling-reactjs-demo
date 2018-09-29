import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { ThemeProvider, theme } from 'styledComponents';
import { NoMatch } from 'components';
import { Login } from './container';

import 'styles/globals.ts';

interface IProps {}

class App extends React.Component<IProps> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/styled/login" component={Login} />
            <Route
              exact
              path="/styled"
              render={() => <Redirect to="/styled/login" />}
            />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default hot(module)(App);
