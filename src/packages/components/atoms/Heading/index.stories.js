import commons from "../../../storybook/stories/commons/text";

import { H } from ".";

export default {
  title: "Atoms/Heading",
  component: H,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
      },
      description: "Heading level (1-6)",
      table: {
        type: { summary: "inline-radio" },
        defaultValue: { summary: 1 },
      },
      options: [1, 2, 3, 4, 5, 6],
    },
    ...commons,
  },
  args: {
    children: "Heading",
  },
};

export const Heading1 = {
  args: {
    variant: 1,
    children: "Heading 1",
    textBreak: true,
    truncateText: true,
    alignment: "left",
    textCase: "sentence",
    fontWeight: "normal",
  },
};

export const Heading2 = {
  args: {
    variant: 2,
    children: "Heading 2",
    textBreak: true,
    truncateText: true,
    alignment: "left",
    textCase: "sentence",
    fontWeight: "normal",
  },
};

export const Heading3 = {
  args: {
    variant: 3,
    children: "Heading 3",
    textBreak: true,
    truncateText: true,
    alignment: "left",
    textCase: "sentence",
    fontWeight: "normal",
  },
};

export const Heading4 = {
  args: {
    variant: 4,
    children: "Heading 4",
    textBreak: true,
    truncateText: true,
    alignment: "left",
    textCase: "sentence",
    fontWeight: "normal",
  },
};

export const Heading5 = {
  args: {
    variant: 5,
    children: "Heading 5",
    textBreak: true,
    truncateText: true,
    alignment: "left",
    textCase: "sentence",
    fontWeight: "normal",
  },
};

export const Heading6 = {
  args: {
    variant: 6,
    children: "Heading 6",
    textBreak: true,
    truncateText: true,
    alignment: "left",
    textCase: "sentence",
    fontWeight: "normal",
  },
};
