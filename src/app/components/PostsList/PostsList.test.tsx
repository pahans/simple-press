import { render, screen } from "@testing-library/react";
import { PostsList } from ".";
import { BlogPost } from "./PostsList";

const posts: BlogPost[] = [
  {
    title: "First Post",
    description: "This is my first blog post",
    author: "Pahan",
    date: "2020-04-02",
  },
  {
    title: "Second Post",
    description: "This is my second blog post",
    author: "Pahan",
    date: "2020-04-02",
  },
];
describe("PostsList", () => {
  it("should render form fields", async () => {
    render(<PostsList posts={posts} />);
    posts.forEach(({ title, description }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });
});
