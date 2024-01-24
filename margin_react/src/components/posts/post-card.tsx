import { Link } from "react-router-dom";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const featuredMedia = post.better_featured_image;
  const featuredImageSizes = featuredMedia?.["media_details"];
  const categories = post?.categories;

  return (
    <article
      className="hover-shadow overflow-hidden rounded-lg bg-white dark:bg-slate-850"
      itemType="https://schema.org/Article"
    >
      <figure className="after: relative overflow-hidden">
        <Link to={`/single-post/${post.id}`} key={post.id} className="group">
          {featuredMedia && featuredImageSizes && (
            <img
              src={featuredMedia.source_url}
              alt={featuredMedia.alt_text}
              className="object-cover transition-transform duration-1600 will-change-transform group-hover:scale-105"
            />
          )}
          {post.modified && (
            <div className="pointer-events-none absolute left-4 top-4 rounded bg-white px-4 py-3 text-center font-medium leading-none text-foreground">
              <span
                className="block text-md"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              ></span>
            </div>
          )}
        </Link>
      </figure>
      <div className="rounded-b-lg p-10">
        <h2 className="mb-4 text-xl font-bold">
          <Link
            className="hover:text-primary"
            to={`/single-post/${post.id}`}
            key={post.id}
            dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
          />
        </h2>
        {categories && (
          <>
            <div className="mb-5 flex">
              <div className="space-x-2 text-xs font-medium text-foreground dark:text-white">
                {categories.map((category) => (
                  <span key={category.id}>{category.name}</span>
                ))}
              </div>
            </div>
          </>
        )}

        {post?.excerpt?.rendered && (
          <div
            dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}
          ></div>
        )}
      </div>
    </article>
  );
};

export default PostCard;
