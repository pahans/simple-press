"use client";

import { Drawer } from "vaul";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ComposeLogo from "./compose-icon.png";
import React from "react";
import { Menu } from "./menu";
import { MenuIcon } from "lucide-react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header
      aria-label="Site navigation"
      className="border-b mb-10 py-2 sticky top-0 flex-none w-full mx-auto bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-800 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="flex gap-2 max-w-2xl mx-auto items-center justify-between container">
        <Link className="flex gap-2 relative items-center" href="/">
          <Image
            src={ComposeLogo}
            alt="Simple Press Logo"
            className="object-contain"
            height={50}
          />
          <h1>Simple Press</h1>
        </Link>
        <div className="flex gap-4 items-center">
          <Menu className="hidden md:block" />
        </div>

        <Drawer.Root direction="right">
          <Drawer.Trigger asChild className="md:hidden">
            <Button size="icon" variant="ghost" asChild>
              <MenuIcon className="h-4 w-4 justify-end" />
            </Button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-white flex flex-col h-full w-40 mt-24 fixed bottom-0 right-0 py-10">
              <div className="flex flex-col items-center justify-center">
                <Menu mobile />
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </nav>
    </header>
  );
};
