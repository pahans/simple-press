import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create new blog post",
};

interface NewPostLayoutProps {
  children: React.ReactNode;
}

export default function NewPostLayout({ children }: NewPostLayoutProps) {
  return <main>{children}</main>;
}
