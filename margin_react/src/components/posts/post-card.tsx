import { Link } from "react-router-dom";
import { useMemo } from "react";

// Post típus definíciója
type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  custom_fields?: { "at-expiration"?: string };
  better_featured_image?: {
    source_url: string;
    alt_text?: string;
    media_details?: {
      sizes?: { medium?: { source_url: string } };
      width: number;
      height: number;
      source_url?: string;
    };
  };
  categories?: { id: number; name: string }[];
  modified: string;
  content?: { rendered: string };
  slug: string;
};

type Props = {
  post: Post;
};

// Véletlenszerű figura és szimbólum generálása
const getRandomCardSymbol = () => {
  const ranks = ["A", "K", "Q", "J"];
  const suits = ["♥", "♦", "♣", "♠"];
  const rank = ranks[Math.floor(Math.random() * ranks.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  return `${rank}${suit}`;
};

const PostCard = ({ post }: Props) => {
  const featuredMedia = post.better_featured_image;
  const featuredImageSizes = featuredMedia?.media_details;
  const categories = post?.categories;

  // Random figura a kártyához
  const cardSymbol = useMemo(() => getRandomCardSymbol(), [post.id]);

  return (
    <article
      id="test"
      className="hover:shadow-xl group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:rotate-1 dark:bg-gray-800"
      style={{
        border: "2px solid #d4af37",
        maxWidth: "300px",
        aspectRatio: "2.5 / 3.5",
      }}
      itemType="https://schema.org/Article"
    >
      {/* Pókerkártya háttér minta */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMC41IDQuNU0wLjUgMC41TTQuNSAwLjVNNCA0IiBzdHJva2U9IiNkNGFmMzciIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-10" />

      {/* Sarkok figurái */}
      <span
        className="absolute left-2 top-2 text-lg font-bold"
        style={{
          color:
            cardSymbol.includes("♥") || cardSymbol.includes("♦")
              ? "#e63946"
              : "#1d3557",
        }}
      >
        {cardSymbol}
      </span>
      <span
        className="absolute right-2 top-2 text-lg font-bold"
        style={{
          color:
            cardSymbol.includes("♥") || cardSymbol.includes("♦")
              ? "#e63946"
              : "#1d3557",
        }}
      >
        {cardSymbol}
      </span>
      <span
        className="absolute bottom-2 left-2 text-lg font-bold"
        style={{
          color:
            cardSymbol.includes("♥") || cardSymbol.includes("♦")
              ? "#e63946"
              : "#1d3557",
        }}
      >
        {cardSymbol}
      </span>
      <span
        className="absolute bottom-2 right-2 text-lg font-bold"
        style={{
          transform: "rotate(180deg)",
          color:
            cardSymbol.includes("♥") || cardSymbol.includes("♦")
              ? "#e63946"
              : "#1d3557",
        }}
      >
        {cardSymbol}
      </span>

      <figure className="relative overflow-hidden">
        <Link to={`/single-post/${post.id}`} className="block">
          {featuredMedia && featuredImageSizes && (
            <img
              src={featuredMedia.source_url}
              alt={featuredMedia.alt_text || "Featured image"}
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {post.modified && (
            <div className="pointer-events-none absolute left-2 top-2 rounded bg-white px-3 py-2 text-center font-medium text-black shadow-sm">
              <span
                className="block text-sm"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </div>
          )}
        </Link>
      </figure>
      <div className="p-6">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
          <Link
            className="hover:text-yellow-600"
            to={`/single-post/${post.id}`}
            dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
          />
        </h2>
        {categories && (
          <div className="mb-4 flex">
            <div className="space-x-2 text-xs font-medium text-gray-700 dark:text-gray-300">
              {categories.map((category) => (
                <span
                  key={category.id}
                  className="rounded bg-gray-200 px-2 py-1 dark:bg-gray-700"
                >
                  {category.name}
                </span>
              ))}
            </div>
          </div>
        )}
        {post?.content?.rendered && (
          <div
            className="text-gray-800 dark:text-gray-200"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        )}
      </div>
    </article>
  );
};

export default PostCard;
