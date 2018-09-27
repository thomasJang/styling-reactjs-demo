import * as React from 'react';
import { asyncComponent } from 'react-async-component';

const Styled = asyncComponent({
  resolve: () =>
    new Promise(resolve =>
      (require as any).ensure(
        [],
        (require: any) => {
          resolve(require('./Styled'));
        },
        'Styled',
      ),
    ),
  LoadingComponent: () => <div />,
});

export default Styled;
