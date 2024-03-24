// Storybook for Heading component

import { H } from ".";
import commons from "../../../storybook/stories/commons/text";

export default {
  title: "Molecules/Progress",
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
  },
};

export const Heading2 = {
  args: {
    variant: 2,
    children: "Heading 2",
  },
};

export const Heading3 = {
  args: {
    variant: 3,
    children: "Heading 3",
  },
};

export const Heading4 = {
  args: {
    variant: 4,
    children: "Heading 4",
  },
};

export const Heading5 = {
  args: {
    variant: 5,
    children: "Heading 5",
  },
};

export const Heading6 = {
  args: {
    variant: 6,
    children: "Heading 6",
  },
};
