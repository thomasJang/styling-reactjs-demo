import * as React from 'react';
import { asyncComponent } from 'react-async-component';

const Css = asyncComponent({
  resolve: () =>
    new Promise(resolve =>
      (require as any).ensure(
        [],
        (require: any) => {
          resolve(require('./Css'));
        },
        'Css',
      ),
    ),
  LoadingComponent: () => <div />,
});

export default Css;
