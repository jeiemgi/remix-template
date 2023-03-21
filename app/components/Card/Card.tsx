import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  white?: boolean;
};

function Card({ white = false, className, ...props }: Props) {
  const bgClass = white ? "bg-white" : "bg-slate-100";
  return (
    <div
      className={clsx("rounded-md bg-white p-2 shadow-md", className, bgClass)}
      {...props}
    />
  );
}

export default Card;
