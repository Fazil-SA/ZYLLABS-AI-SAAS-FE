"use client"
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-[#111827] text-white">
      <div className="flex-1">
        <Link href="/dashboard" className="flex items-center">
          <div className="ml-[-1rem] relative w-24 h-24">
            <Image fill alt="zyllabs logo" src="/logo.png" />
          </div>
          <div
            className={cn(
              "text-2xl font-bold mb-2 justify-center items-center",
              montserrat.className
            )}
          >
            <h1>Zyllabs</h1>
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
