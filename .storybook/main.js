/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    // CRA의 Webpack 설정 구조에서 'oneOf' 규칙을 찾습니다.
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);

    if (oneOfRule) {
      // oneOf 내부의 규칙들을 순회합니다.
      oneOfRule.oneOf.forEach((rule) => {
        if (rule.use && Array.isArray(rule.use)) {
          const cssLoader = rule.use.find((item) => item.loader && item.loader.includes('css-loader'));
          // CSS Modules 옵션이 켜져 있는 경우(module.scss 등) 클래스 이름 형식을 해시값으로 변경합니다.
          if (cssLoader && cssLoader.options && cssLoader.options.modules) {
            // CRA 기본 설정(getLocalIdent)이 우선순위가 높으므로 제거해야 localIdentName이 적용됩니다.
            delete cssLoader.options.modules.getLocalIdent;
            cssLoader.options.modules.localIdentName = '[hash:base64:8]';
          }
        }
      });
    }
    return config;
  },
};
export default config;
