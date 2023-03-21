import { db } from "~/services/db.server";
import type { Post } from "@prisma/client";

export type { Post };

export const getPosts = () => db.post.findMany();

export const getPostById = (id: number) => {
  return db.post.findUnique({ where: { id: id } });
};

export const createPost = ({
  title,
  content,
}: Pick<Post, "title" | "content">) => {
  return db.post.create({ data: { title, content } });
};

export const deletePost = ({ id }: Pick<Post, "id">) => {
  return db.post.delete({ where: { id } });
};
