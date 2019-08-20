import { jss } from 'react-jss';
import colors from './colorPalette';
import utils from './utils';
import typography from './typography';

export const ApplyGlobalCss = (rules = {}) => jss.createStyleSheet(rules).attach();

export const createTheme = (theme = {}) => {
  return {
    colors,
    utils,
    typography,
    ...theme
  };
};
