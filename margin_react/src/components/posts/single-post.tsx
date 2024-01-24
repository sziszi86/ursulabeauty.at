import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type SinglePostProps = {
    postId: string;
};

const SinglePost = ({ postId }: SinglePostProps) => {
    const { isPending, error, data: post } = useQuery({
        queryKey: ['post', postId],
        queryFn: () =>
            axios
                .get(`https://palace-poker.hu/ujadmin/wp-json/wp/v2/posts/${postId}`)
                .then((res) => res.data),
    });

    if (isPending) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    if (!post) return <p>Post not found</p>;

    return (
        <div>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    );
};

const SinglePostPage = () => {
    const { postId } = useParams<{ postId: string }>();
    const validPostId = postId || ""; // Ha a postId undefined, akkor üres string

    return <SinglePost postId={validPostId} />;
};

export default SinglePostPage;
