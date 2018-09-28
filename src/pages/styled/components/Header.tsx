import * as React from 'react';
import { styled, darken } from 'styledComponents';
import * as Color from 'color';
import { Icon } from 'antd';

const Component = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.48);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  [data-container] {
    height: 60px;
  }

  h1 {
    font-size: 1.5em;
    color: ${p =>
      Color(p.theme.primary_color)
        .darken(0.3)
        .hex()};
    margin: 0;
    font-family: ${p => p.theme.heading_font_family};
  }
  .desc {
    font-size: 1em;
    font-weight: 600;
    color: ${p => darken(p.theme.primary_color, 0.3)};
  }
`;

interface IProps {
  className?: string;
}
class Header extends React.Component<IProps> {
  render() {
    return (
      <Component>
        <div data-container>
          <h1>
            <Icon type={'facebook'} />
            &nbsp; Styling in React JS
          </h1>
          <div className={'desc'}>Developer Master Class Hanoi, Vietnam.</div>
        </div>
      </Component>
    );
  }
}

export default Header;
