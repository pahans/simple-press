import { render, screen } from "@testing-library/react";
import { PostsList } from ".";
import { BlogPost } from "@/lib/definitions";

const posts: BlogPost[] = [
  {
    id: 1,
    title: "First Post",
    description: "This is my first blog post",
    createdAt: new Date(2024, 5, 1),
  },
  {
    id: 2,
    title: "Second Post",
    description: "This is my second blog post",
    createdAt: new Date(2024, 5, 1),
  },
];

jest.mock("@/lib/data", () => ({
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
