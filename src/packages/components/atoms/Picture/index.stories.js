import Picture from "./index";

export default {
  title: "Atoms/Image",
  component: Picture,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Image source",
      table: {
        type: { summary: "text" },
        defaultValue: {
          summary: "https://via.placeholder.com/1920x1080",
        },
      },
    },
    alt: {
      control: "text",
      description: "Image alt",
      table: {
        type: { summary: "text" },
      },
    },
    width: {
      control: "number",
      description: "Image width",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: "number",
      description: "Image height",
      table: {
        type: { summary: "number" },
      },
    },
    loading: {
      control: {
        type: "inline-radio",
      },
      options: ["lazy", "eager"],
      description: "Image loading",
      table: {
        type: { summary: "inline-radio" },
        defaultValue: { summary: "lazy" },
      },
    },
    aspectRatio: {
      control: {
        type: "inline-radio",
      },
      options: ["16x9", "4x3", "1x1"],
      description: "Aspect ratio",
      table: {
        type: { summary: "inline-radio" },
        defaultValue: { summary: "16x9" },
      },
    },
  },
};

export const AspectRatioImage = {
  args: {
    src: "https://via.placeholder.com/1920x1080",
    alt: "Placeholder",
    width: 640,
    height: 480,
    aspectRatio: "16x9",
    loading: "lazy",
  },
};
