import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPostById } from "~/services/post.server";
import { Card } from "~/components/Card";
import type { LoaderArgs } from "@remix-run/node";

type LoaderData = {
  post: Awaited<ReturnType<typeof getPostById>> | null;
};

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.postId) {
    throw new Response(`No client ID provided`, {
      status: 404,
    });
  }

  const postId = Number(params.postId);
  const data: LoaderData = { post: await getPostById(postId) };

  if (!data) {
    throw new Response(`No client found by ID ${params.clientId}`, {
      status: 404,
    });
  }

  return json(data);
};

function PostSlug() {
  const { post } = useLoaderData<LoaderData>();

  return (
    <Card>
      <p className={"mb-2"}>
        This page is to demonstrate how to create pages with{" "}
        <a
          className={"font-bold hover:underline"}
          href="https://remix.run/docs/en/v1/file-conventions/routes-files#dynamic-route-parameters"
        >
          dynamic route params
        </a>
      </p>
      {post ? (
        <p>
          Id: {post.id} <br />
          Title: {post.title} <br />
          Content: {post.content} <br />
        </p>
      ) : (
        <p>Error fetching post</p>
      )}
    </Card>
  );
}

export default PostSlug;
