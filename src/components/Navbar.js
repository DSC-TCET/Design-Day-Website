import { Container } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [data] = useState([
    {
      name: "Home",
      to: "home",
    },
    {
      name: "About",
      to: "about",
    },
    {
      name: "Rules",
      to: "rules",
    },
    {
      name: "Code of Conduct",
      to: "conduct",
    },
    {
      name: "FAQ",
      to: "faq",
    },
  ]);

  return (
    <nav
      className="fixed top-0 text-[rgba(252, 244, 244, 0.768)] left-0 w-full backdrop-blur"
      style={{ zIndex: "999" }}
    >
      <Container className="p-4 flex justify-between items-center">
        <div className="flex gap-8 text-md">
          <h1 className="text-2xl inline-block font-bold m-0">LOGO</h1>
          {data.map((item) => {
            return (
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white transition ease-in-out "
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
