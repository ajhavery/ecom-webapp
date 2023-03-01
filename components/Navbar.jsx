"use client";

import { useState } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import NavbarLg from "./navbar/NavbarLg";
import NavbarMd from "./navbar/NavbarMd";
import NavbarSm from "./navbar/NavbarSm";

export default function Navbar() {
  const [value, setValue] = useState("");
  const onChange = (event) => setValue(event.target.value);

  const { width, height } = useWindowDimensions();
  // console.log(width);

  return (
    // header section
    <header className="fixed top-0 left-0 right-0 z-20">
      {/* left side - logo and search */}
      {width < 768 ? (
        <NavbarSm value={value} onChange={onChange} className="h-[9rem]" />
      ) : width < 1024 ? (
        <NavbarMd value={value} onChange={onChange} className="h-[8rem]" />
      ) : (
        <NavbarLg value={value} onChange={onChange} className="h-[4rem]" />
      )}
    </header>
  );
}
