import { redirect, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostForm } from "~/components/PostForm";
import { PostGrid } from "~/components/PostGrid";
import { createPost, deletePost, getPosts } from "~/services/post.server";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { _action, ...values } = Object.fromEntries(formData);

  console.log(_action, values);

  /**
   * Further explanation on how this works:
   * @link {https://youtu.be/w2i-9cYxSdc}
   */
  switch (_action) {
    case "save":
      const rawTitle = formData.get("title");
      const rawContent = formData.get("content");

      if (typeof rawTitle === "string" && typeof rawContent === "string") {
        await createPost({
          title: rawTitle,
          content: rawContent,
        });
        return redirect("/posts");
      } else {
        return json({ error: "Invalid Form Data" }, { status: 422 });
      }
    case "delete":
      const rawId = formData.get("id");
      if (rawId && typeof rawId === "string") {
        await deletePost({
          id: Number(rawId),
        });
        return redirect("/posts");
      }

      return json({ error: `Invalid Form Data` }, { status: 422 });

    default:
      return json({ error: `Invalid Form Data` }, { status: 400 });
  }
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { posts: await getPosts() };
  return json(data);
};

export default function Page() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <div>
      <PostForm action={"/posts"} />
      <PostGrid posts={posts} />
    </div>
  );
}
