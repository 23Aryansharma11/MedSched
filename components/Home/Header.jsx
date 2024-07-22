"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact us",
      path: "/contact",
    },
  ];
  const pathName = usePathname();
  return (
    <header className="flex items-center justify-around py-2 shadow-sm">
      <Link href="/" className="flex justify-center items-center gap-2">
        <Image
          src="/Logo/Logo.png"
          width={30}
          height={30}
          alt="Logo"
          className=""
        />
        <p className="text-2xl font-bold text-blue-600">Med Sched</p>
      </Link>
      <span className="hidden md:flex justify-around items-center gap-20">
        {Menu.map((menuItem, index) => {
          const isActive =
            pathName == menuItem.path || pathName.startsWith(menuItem.path);
          return (
            <Link
              href={menuItem.path}
              key={index}
              className={`font-semibold hover:text-blue-500 ${
                isActive && "text-blue-500"
              }`}
            >
              {menuItem.name}
            </Link>
          );
        })}
      </span>
      {/* Todo: optional rendering of button and profile */}
      <Button className="bg-transparent text-blue-500 border-blue-500 border-2 hover:text-white hover:bg-blue-500  transition-colors duration-300 ease-in-out font-bold">
        Get Started
      </Button>
    </header>
  );
};

export default Header;
