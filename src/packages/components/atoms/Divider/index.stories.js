import Divider from "./index.jsx";

export default {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
        defaultValue: "radial",
      },
      description: "Type of divider",
      table: {
        type: { summary: "inline-radio" },
        defaultValue: { summary: "radial" },
      },
      options: ["radial", "linear", "dashed", "line"],
    },
  },
  args: {},
};

export const RadialDivider = {
  args: {
    type: "radial",
  },
};
