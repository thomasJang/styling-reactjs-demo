import * as React from 'react';
import { styled, darken, saturate, desaturate } from 'styledComponents';
import { Header, LoginForm, Footer } from '../components';

const Component = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  color: ${p => {
    return p.theme.primary_color;
  }}

  background: linear-gradient(
    135deg,
    ${p => saturate(p.theme.bgcolor, 0.5)},
    ${p => p.theme.bgcolor},
    ${p => p.theme.primary_color},
    ${p => darken(p.theme.primary_color, 0.5)}
  );
`;

interface IProps {}

class Login extends React.Component<IProps> {
  render() {
    return (
      <Component>
        <Header />
        <LoginForm />
        <Footer />
      </Component>
    );
  }
}

export default Login;
