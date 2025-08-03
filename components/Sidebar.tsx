"use client";

import {
  LayoutDashboard,
  Logs,
  Mails,
  Settings,
  ShieldHalf,
  User,
  Users,
} from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import Useritem from "./Useritem";
import Link from "next/link";

function Sidebar() {
  const menuItems = [
    {
      heading: "General",
      items: [
        { title: "Dashboard", link: "/", icon: <LayoutDashboard /> },
        { title: "Profile", link: "/", icon: <User /> },
        { title: "Inbox", link: "/", icon: <Mails /> },
        { title: "Team", link: "/", icon: <Users /> },
      ],
    },
    {
      heading: "Settings",
      items: [
        { title: "Public Settings", link: "/", icon: <Settings /> },
        { title: "Privacy", link: "/", icon: <ShieldHalf /> },
        { title: "Logs", link: "/", icon: <Logs /> },
      ],
    },
  ];

  return (
    <div className="w-[300px] min-w-[300px] flex flex-col gap-4 border-r min-h-screen p-4">
      <div className="">
        <Useritem />
      </div>

      <div className="grow">
        <Command>
          <CommandList>
            {menuItems.map((menuItem, index: number) => (
              <CommandGroup key={index} heading={menuItem.heading}>
                {menuItem.items.map((item, index: number) => (
                  <CommandItem key={index} className="cursor-pointer" asChild>
                    <Link href={item.link} className="flex gap-2">
                      {item.icon}
                      {item.title}
                    </Link>
                  </CommandItem>
                ))}
                {menuItems.length - 1 !== index && <CommandSeparator />}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>

      <div className=""></div>
    </div>
  );
}

export default Sidebar;
