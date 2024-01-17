"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import Container from "../Container";

const NavBar = () => {
  return (
    <div
      className="sticky top-0 border 
     bg-secondary "
    >
      <Container>
        <UserButton afterSignOutUrl="" />
      </Container>
    </div>
  );
};

export default NavBar;
