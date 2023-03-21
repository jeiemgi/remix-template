import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "@remix-run/react";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Posts",
    href: "/posts",
  },
];

function Navigation() {
  const location = useLocation();

  console.log(location);
  return (
    <header
      className={
        "flex h-10 w-full items-center justify-between bg-gray-300 px-2"
      }
    >
      <Link className={"bold text-xl font-bold"} to={"/"}>
        Canvas x Remix
      </Link>

      <nav>
        <ul className={"flex gap-2"}>
          {links.map(({ title, href }, index) => {
            const active = location.pathname === href;
            return (
              <li
                key={title}
                className={clsx(
                  active ? "font-bold underline" : "hover:underline"
                )}
              >
                <Link aria-disabled={true} to={href}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
