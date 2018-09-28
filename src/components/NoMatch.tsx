import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styledComponents';

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 30px;
`;

const NoMatch: React.StatelessComponent = () => {
  return (
    <Component>
      <Link to={'/css'}>CSS</Link>
      <br />
      <Link to={'/styled'}>STYLED</Link>
    </Component>
  );
};

export default NoMatch;
