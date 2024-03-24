// Storybook for Heading component

import Checkbox from ".";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    className: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "" },
      },
    },
    label: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "" },
      },
    },
  },
};

export const Checked = {
  args: {
    checked: true,
    label: "Try out the checkbox",
  },
};
