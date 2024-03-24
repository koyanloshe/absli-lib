import Input from "./index";

export default {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
      },
      description: "Input type",
      table: {
        type: { summary: "inline-radio" },
        defaultValue: { summary: "text" },
      },
      options: [
        "text",
        "password",
        "email",
        "tel",
        "url",
        "number",
        "date",
        "time",
        "week",
        "month",
      ],
    },
    name: {
      control: {
        type: "text",
      },
      description: "Input name",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "" },
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
      description: "Input placeholder",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "" },
      },
    },
  },
  args: {
    children: "Heading",
  },
};

export const Text = {
  args: {
    type: "text",
    name: "text",
    value: "",
    placeholder: "Text",
  },
};
