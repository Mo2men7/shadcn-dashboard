"use client";

import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    image: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    description: 12,
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    image: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
    description: 12,
    email: "zoey.lang@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    age: "28",
    image: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
    description: 12,
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    age: "24",
    image: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
    description: 12,
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    role: "P. Manager",
    team: "Management",
    age: "29",
    image: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png",
    description: 12,
    email: "brian.kim@example.com",
    status: "active",
  },
];

const countries = [
  {
    id: "egypt",
    name: "Egypt",
    image: "https://flagcdn.com/eg.svg",
    description: "20V",
  },
  {
    id: "syria",
    name: "Syria",
    image: "https://flagcdn.com/sy.svg",
    description: "15V",
  },
  {
    id: "argentina",
    name: "Argentina",
    image: "https://flagcdn.com/ar.svg",
    description: "25V",
  },
  {
    id: "brazil",
    name: "Brazil",
    image: "https://flagcdn.com/br.svg",
    description: "31V",
  },
  {
    id: "spain",
    name: "Spain",
    image: "https://flagcdn.com/es.svg",
    description: "9V",
  },
];

function CardList({ title }: { title: string }) {
  const list = title === "users" ? users : countries;
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6 capitalize">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex flex-row items-center gap-4 p-2 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="w-8 h-8 rounded-full relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            {/* <CardContent> */}
            <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
            {/* </CardContent> */}
            {/* <CardFooter>{item.description}</CardFooter> */}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardList;
