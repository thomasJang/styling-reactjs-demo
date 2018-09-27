import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import './less/index.less';

injectGlobal`
  ${styledNormalize}
  
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Lato');
`;
