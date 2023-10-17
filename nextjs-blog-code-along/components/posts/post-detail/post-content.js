import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  image: "getting-started-nextjs.png",
  slug: "getting-started-width-nextjs",
  title: "Getting Started with Next.JS",
  date: "2022-02-10",
  content: `# This is a first post!

  Hello World!

  1. ONE
  2. TWO
  `,
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
