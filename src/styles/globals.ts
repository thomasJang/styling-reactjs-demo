import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import './less/antd-theme.less';

injectGlobal`
  ${styledNormalize}
`;
