import React from "react";
import { Card } from "~/components/Card";
import { Post } from "~/components/Post";
import type { Post as PostType } from "~/services/post.server";

interface Props {
  posts: PostType[];
}

const PostGrid = ({ posts }: Props) => {
  return (
    <Card>
      <div className={"grid grid-cols-1 gap-1 lg:grid-cols-2"}>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Post
              id={post.id}
              title={post.title}
              content={post.content}
              key={post.title + index}
            />
          ))
        ) : (
          <span> No posts yet, please add one 👆</span>
        )}
      </div>
    </Card>
  );
};

export default PostGrid;
