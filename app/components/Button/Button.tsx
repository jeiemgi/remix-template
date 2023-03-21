import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type ButtonTheme = "primary" | "secondary" | "danger";

interface Props extends ComponentPropsWithoutRef<"button"> {
  theme?: ButtonTheme;
}

const getClassNames = (theme: ButtonTheme) => {
  switch (theme) {
    case "primary":
      return "bg-slate-500 hover:bg-slate-900";
    case "secondary":
      return "bg-cyan-500 hover:bg-cyan-900";
    case "danger":
      return "bg-rose-500 hover:bg-rose-900";
  }
};

function Button({ className, theme = "primary", ...props }: Props) {
  const themeStyles = getClassNames(theme);

  return (
    <button
      className={clsx(
        themeStyles,
        className,
        "disabled:opacity-50",
        "rounded py-1 px-2 text-sm text-white"
      )}
      {...props}
    />
  );
}

export default Button;
