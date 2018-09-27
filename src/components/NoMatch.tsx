import * as React from 'react';
import { Link } from 'react-router-dom';

const NoMatch: React.StatelessComponent = () => {
  return (
    <div>
      <Link to={'/css'}>CSS</Link>
      <br />
      <Link to={'/styled'}>STYLED</Link>
    </div>
  );
};

export default NoMatch;
