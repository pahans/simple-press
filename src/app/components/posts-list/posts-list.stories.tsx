import type { Meta, StoryObj } from "@storybook/react";
import { PostsList } from ".";
import { BlogPost } from "@/app/lib/definitions";

const posts: Array<BlogPost> = Array.from({ length: 10 }, (_, i) => {
  return {
    id: i,
    title: `hello world${i}`,
    description: `${i} Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.`,
    author: "Pahan",
    createdAt: new Date(2024, 5, 1),
  };
});

const meta = {
  title: "PostsList",
  component: PostsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { posts },
} satisfies Meta<typeof PostsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
