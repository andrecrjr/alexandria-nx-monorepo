import { BookIcon, Button, MenuIcon } from "@alexandria/shadcn-ui";
import React from "react";
import { Link } from "react-router-dom";


export const Header = () => {
  return (<header className="sticky top-0 z-10 border-b bg-background p-4 shadow-sm md:hidden">
          <div className="flex items-center justify-between">
            <Link to="#" className="flex items-center gap-2 font-semibold">
              <BookIcon className="h-6 w-6" />
              <span>Alexandria Admin</span>
            </Link>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </header>);
};

