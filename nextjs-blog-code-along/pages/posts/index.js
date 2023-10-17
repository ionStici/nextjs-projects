import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  //   { image, title, date, excerpt, slug },
  {
    image: "getting-started-nextjs.png",
    slug: "getting-started-width-nextjs",
    title: "Getting Started with Next.JS",
    date: "2022-02-10",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  },
  {
    image: "getting-started-nextjs.png",
    slug: "getting-started-width-nextjs2",
    title: "Getting Started with Next.JS",
    date: "2022-02-10",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  },
  {
    image: "getting-started-nextjs.png",
    slug: "getting-started-width-nextjs3",
    title: "Getting Started with Next.JS",
    date: "2022-02-10",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  },
  {
    image: "nextjs-file-based-routing.png",
    slug: "nextjs-file-based-routing",
    title: "Getting Started with Next.JS",
    date: "2022-02-10",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
