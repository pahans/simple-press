import { render, screen } from "@testing-library/react";
import { PostsList } from ".";
import { BlogPost } from "./PostsList";

const posts: BlogPost[] = [
  {
    id: 1,
    title: "First Post",
    description: "This is my first blog post",
    author: "Pahan",
    date: "2020-04-02",
  },
  {
    id: 2,
    title: "Second Post",
    description: "This is my second blog post",
    author: "Pahan",
    date: "2020-04-02",
  },
];

jest.mock("@/app/lib/data", () => ({
  fetchAllPosts: () => {
    return Promise.resolve(posts);
  },
}));

describe("PostsList", () => {
  it("should render posts list", async () => {
    const ResolvedPostsList = await PostsList({});
    render(ResolvedPostsList);

    posts.forEach(({ title, description }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });
});
