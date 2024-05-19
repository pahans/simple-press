import { Edit as EditIcon, LogIn as LogInIcon } from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { cn } from "@/lib/utils";

interface MenuProps {
  mobile?: boolean;
  className?: string;
}

const menuItems = [
  { icon: EditIcon, label: "Add Post", link: "/admin?overlay=new-post" },
  { icon: LogInIcon, label: "Login", link: "#" },
];

export const Menu: React.FC<MenuProps> = ({ mobile, className = "" }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        {
          "flex-col items-start": mobile,
        },
        className
      )}
    >
      {menuItems.map((item) => (
        <React.Fragment key={item.label}>
          <Button variant="ghost" asChild>
            <Link
              key={item.label}
              href={item.link}
              className={cn("flex items-center", {
                "items-start justify-start": mobile,
              })}
            >
              <item.icon className="mr-2" />
              {item.label}
            </Link>
          </Button>
          {mobile && <Separator />}
        </React.Fragment>
      ))}
    </div>
  );
};
