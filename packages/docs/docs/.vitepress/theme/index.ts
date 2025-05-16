import DefaultTheme from 'vitepress/theme';

import elementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(elementPlus);
  }
};
