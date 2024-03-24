/** @type { import('@storybook/react').Preview } */
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

import yourTheme from "./YourTheme";
import "../../../../public/scss/index.css";

const preview = {
  parameters: {
    docs: {
      theme: yourTheme,
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: "mobile1",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
