import React, { useState, useEffect } from "react";
import Link from "next/link";
import { styled } from "lib/theme";
import clsx from "clsx";

const links = [
  { title: "About", to: "/about" },
  { title: "Writing", to: "/writing" },
  { title: "Projects", to: "/projects" },
  { title: "Contact", to: "/contact" },
];

const Ul = styled("ul", {
  display: "flex",

  flexDirection: "column",
  "@isDesktop": {
    flexDirection: "row",
  },
});

const Li = styled("li", {
  display: "inline-block",
  margin: "16px",
  textAlign: "center",
  textTransform: "uppercase",
});

export function NavbarLinks() {
  const [onLink, setOnLink] = useState("");
  useEffect(() => {
    const initialRender = () => {
      setOnLink(window.location.pathname);
    };

    initialRender();
  }, []);

  return (
    <Ul>
      {links.map((link) => (
        <Li key={link.to}>
          <Link
            className={clsx("main-nav", onLink === link.to && "on")}
            href={link.to}
            aria-label={`Navigate to ${link.title}`}
          >
            {link.title}
          </Link>
        </Li>
      ))}
    </Ul>
  );
}

export default NavbarLinks;
