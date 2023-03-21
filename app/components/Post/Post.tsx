import { Link, Form } from "@remix-run/react";
import { Card } from "~/components/Card";
import { Button } from "~/components/Button";

interface Props {
  id: number;
  title?: string | null;
  content?: string | null;
}

export default function Post({ id, title, content }: Props) {
  return (
    <Card white className={"rounded-md bg-white p-2 shadow-md"}>
      <div className={"h-10 border-b"}>
        {title ?? <h1 className={"text-4xl"}>{title}</h1>}
        {content ? <p>{content}</p> : null}
      </div>
      <div className="flex w-full items-center justify-end gap-1 pt-2">
        <Link to={`/posts/${id}`}>
          <Button>View Post</Button>
        </Link>
        <Form method={"post"}>
          <input readOnly type="number" name={"id"} value={id} hidden />
          <Button name="_action" value="delete" theme={"danger"}>
            Delete
          </Button>
        </Form>
      </div>
    </Card>
  );
}
