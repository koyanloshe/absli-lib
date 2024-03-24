/** @type { import('@storybook/nextjs').StorybookConfig } */
import { dirname, join } from "path";

function getAbsolutePath(value) {
  return dirname(
    require.resolve(join(value, "package.json")),
  );
}

const config = {
  stories: [
    "./welcome.stories.mdx",
    "../stories/*.mdx",
    "../../components/**/*.stories.@(js|jsx|ts|tsx)",
    // "../../core/theme/stories/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("storybook-dark-mode"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  typescript: {
    reactDocgen: false,
  },
};
export default config;
