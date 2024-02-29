import useFramerTransition from "@/hooks/use-transition";
import { Helmet } from "react-helmet";
import SinglePost from "@/components/posts/single-post.tsx";

const Blog = useFramerTransition(
  <>
    <Helmet>
      <title>Blog</title>
    </Helmet>
    <main className="relative">
      <section className="border-b py-24">
        <div className="container mt-12">
          <SinglePost />
        </div>
      </section>
    </main>
  </>,
);
export default Blog;
