import Link from "next/link";
import Head from "next/head";
import Heading from "@/components/Heading";

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    if (!data) {
      return { notFound: true };
    }
    return {
      props: { posts: data },
    };
  } catch (error) {
    return {
      props: { posts: null },
    };
  }
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Post list" />
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li
              style={{
                display: "flex",
              }}
              key={id}
            >
              <Link href={`posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
