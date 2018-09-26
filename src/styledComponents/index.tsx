import * as theme from 'styles/theme.js';
export { theme };

import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
const {
  default: styled,
  ThemeProvider,
  withTheme,
  keyframes,
} = styledComponents as ThemedStyledComponentsModule<typeof theme>;

export { styled, ThemeProvider, withTheme, keyframes };
