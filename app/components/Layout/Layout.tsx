import Footer from "./Footer";
import Navigation from "./Navigation";
import type { ComponentPropsWithoutRef } from "react";

// These styles are for demo purposes, they can be removed for your own.

function Layout({ children }: ComponentPropsWithoutRef<"main">) {
  return (
    <div className={"flex min-h-screen flex-col justify-between"}>
      <Navigation />
      <main className={"mx-auto block w-full max-w-screen-md"}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
