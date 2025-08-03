"use client";

import { useState } from "react";
import { CommandDemo } from "./CommandDemo";
import { Button } from "./ui/button";
import { BellDotIcon, BellIcon, MoonIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function Header() {
  const [notifications, setNotifications] = useState([
    { text: "First new message you got", date: "2/2/2022", read: false },
    { text: "Second new message you got", date: "4/4/2024", read: false },
    { text: "Third new message you got", date: "5/5/2025", read: true },
  ]);

  const toggleRead = (index: number) => {
    setNotifications((prev) =>
      prev.map((n, i) => (i === index ? { ...n, read: !n.read } : n))
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />

      <div className="flex items-center justify-end gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="secondary" size="icon" className="size-8">
              {notifications.find((n) => n.read) ? (
                <BellDotIcon />
              ) : (
                <BellIcon />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications
              .slice()
              .reverse()
              .map((notification, index) => (
                <DropdownMenuItem
                  key={index}
                  className={`cursor-pointer text-sm flex flex-col items-start ${
                    notification.read ? "bg-neutral-200" : ""
                  }`}
                  onClick={() => toggleRead(notifications.length - 1 - index)}
                >
                  <p>{notification.text}</p>
                  <p className="text-xs text-neutral-600">
                    {notification.date}
                  </p>
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="secondary" size="icon" className="size-8">
          <MoonIcon />
        </Button>
      </div>
    </div>
  );
}

export default Header;
