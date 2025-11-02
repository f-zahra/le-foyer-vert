"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PhoneCall from "@/components/phoneCall";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/navItems";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden flex items-center gap-4">
      <PhoneCall />
      <div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5"></Menu>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle></SheetTitle>
            <div className="flex flex-col space-y-4 mt-8 p-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  className=" font-medium text-muted-foreground hover:text-green-900  hover:scale-105 transition-colors duration-200"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNavigation;
