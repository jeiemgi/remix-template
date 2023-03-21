import { Card } from "~/components/Card";
import { Button } from "~/components/Button";
import type { ComponentPropsWithoutRef } from "react";

const PostForm = ({
  method = "post",
  ...props
}: ComponentPropsWithoutRef<"form">) => {
  return (
    <Card className={"mb-10 w-full"}>
      <h1 className={"mb-2"}>Create a post</h1>
      <form method={method} action={"/posts?index"} {...props}>
        <input
          required
          type="text"
          name={"title"}
          placeholder={"Title"}
          className="mb-1 block w-full rounded-md border border-slate-300 bg-white px-2 py-1 text-sm placeholder-slate-400 shadow-sm"
        />
        <input
          required
          type="text"
          name={"content"}
          placeholder={"Content"}
          className="mb-1 block w-full rounded-md border border-slate-300 bg-white px-2 py-1 text-sm placeholder-slate-400 shadow-sm"
        />
        <Button name="_action" value="save" type={"submit"}>
          Create Post
        </Button>
      </form>
    </Card>
  );
};

export default PostForm;
