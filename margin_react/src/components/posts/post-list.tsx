import PostCard from "@/components/posts/post-card";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Post {
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
}

interface PostListProps {
  limit: number;
  showPagination: boolean;
  grid?: string;
}

export default function PostList({
  limit,
  grid,
  showPagination,
}: PostListProps) {
  const [totalItems, setTotalItems] = useState<number | null>(null);

  const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get("/wp-json/wp/v2/posts?_embed", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

  const { isLoading, error, data } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const isPostValid = (post: Post): boolean => {
    const expirationDate = post.custom_fields?.["at-expiration"];
    if (!expirationDate) return true;
    const now = new Date();
    const postExpirationDate = new Date(expirationDate);
    return postExpirationDate > now;
  };

  const getTotalItems = useCallback(async () => {
    try {
      const total = 12;
      setTotalItems(total);
    } catch (error) {
      console.error("Error fetching total items:", error);
    }
  }, []);

  useEffect(() => {
    getTotalItems();
  }, [getTotalItems]);

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <>
      <div className={cn("grid grid-cols-1 gap-10 lg:grid-cols-3", grid)}>
        {isLoading &&
          Array.from({ length: limit }).map((_, i) => (
            <Skeleton key={i} className="h-[33rem] w-full" />
          ))}

        {data
          ?.filter(isPostValid)
          .slice(0, limit)
          .map((post) => (
            <PostCard
              key={post.id}
              post={{
                ...post,
                modified: post.modified || "",
                content: post.content || { rendered: "" },
                categories: post.categories || [],
                better_featured_image: post.better_featured_image
                  ? {
                      source_url: post.better_featured_image.source_url,
                      alt_text: post.better_featured_image.alt_text || "",
                      media_details: {
                        width:
                          post.better_featured_image.media_details?.width || 0,
                        height:
                          post.better_featured_image.media_details?.height || 0,
                        sizes: {
                          medium: {
                            source_url:
                              post.better_featured_image.media_details?.sizes
                                ?.medium?.source_url ||
                              post.better_featured_image.source_url,
                          },
                        },
                        source_url:
                          post.better_featured_image.media_details
                            ?.source_url ||
                          post.better_featured_image.source_url,
                      },
                    }
                  : undefined,
              }}
            />
          ))}
      </div>

      {data?.length &&
      showPagination &&
      totalItems &&
      data.length < totalItems ? (
        <div className="mt-10 text-center">
          <Button size="lg">Továbbiak betöltése</Button>
        </div>
      ) : null}
    </>
  );
}
