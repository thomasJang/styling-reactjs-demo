import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import './antd-theme.less';

injectGlobal`
  ${styledNormalize}
  
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Lato');
  
  :root{  
    --primary-color: #4654d5;
    --secondary-color: #7d86f7;
    --info_color: #4654d5;
    --success_color: 52C41A;
    --processing_color: #4654d5;
    --error_color: #F5222D;
    --highlight_color: #F5222D;
    --warning-color: #FAAD14;
    --normal-color: #d9d9d9;
    --text-color: #565f70;
    --link-color: #4654d5;
    --bgcolor: #ef00f2;
    --border-color-base: #eaeaec;
    --heading-font-family: 'Abril Fatface', cursive;
    
    font-family: 'Lato', sans-serif;
    color: var(--text-color);
  }
  
  [data-container] {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
