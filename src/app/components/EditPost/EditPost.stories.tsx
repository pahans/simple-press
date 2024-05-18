import type { Meta, StoryObj } from "@storybook/react";

import { EditPost } from "./EditPost";

const meta = {
  title: "EditPost",
  component: EditPost,
  tags: ["autodocs"],
} satisfies Meta<typeof EditPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
