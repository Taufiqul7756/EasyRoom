"use client";

import React from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const NavBar = () => {
  const router = useRouter();
  const { userId } = useAuth();
  return (
    <div
      className="sticky top-0 border 
     bg-secondary "
    >
      <Container>
        <div className="flex justify-between items-center">
          <div
            onClick={() => router.push("/")}
            className="flex items-center gap-1 cursor-pointer"
          >
            <Image src="/logo.png" alt="" width="25" height="25" />
            <div className="font-bold">EasyRoom</div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div>Theme</div>
            <UserButton afterSignOutUrl="" />
            {!userId && (
              <>
                <Button
                  onClick={() => router.push("/sign-in")}
                  variant="outline"
                  size="sm"
                  className="bg-blue-500 text-white"
                >
                  Sign in
                </Button>
                <Button onClick={() => router.push("/sign-up")} size="sm">
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
