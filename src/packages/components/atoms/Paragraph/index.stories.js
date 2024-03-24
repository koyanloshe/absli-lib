// Storybook for Paragraph component

import commons from "../../../storybook/stories/commons/text";

import { P } from ".";

export default {
  title: "Atoms/Paragraph",
  component: P,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },
      description: "Paragraph Sizes",
      table: {
        type: { summary: "inline-radio" },
        defaultValue: { summary: "medium" },
      },
      options: [
        "medium",
        "small",
        "xsmall",
        "overline",
        "overline-small",
      ],
    },
    ...commons,
  },
  args: {
    children: "Heading",
  },
};

export const Paragraph = {
  args: {
    size: "medium",
    children: "Paragraph",
  },
};
