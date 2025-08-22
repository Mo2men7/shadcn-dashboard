"use client";

import { Moon, User, Settings, LogOut, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

function Navbar() {
  const { setTheme } = useTheme();
  // const { toggleSidebar } = useSidebar();

  return (
    <nav className="py-4 px-6 flex items-center justify-between">
      <div>
        <SidebarTrigger />
        {/* <Button variant="outline" onClick={toggleSidebar}>
          Collapse Sidebar Button
        </Button> */}
      </div>

      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/76549221?v=4" />
              <AvatarFallback>MH</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-10 w-10 me-1" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-10 w-10 me-1" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              <LogOut className="h-10 w-10 me-1" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
