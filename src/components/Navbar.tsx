import { Moon, User, Settings, LogOut } from "lucide-react";
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

function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      <div>{/* Button to collapse */}</div>

      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>

        <div>
          <Moon />
        </div>

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
