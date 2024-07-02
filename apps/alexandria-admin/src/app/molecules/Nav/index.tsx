import { BookIcon, UsersIcon } from "@alexandria/shadcn-ui";
import React from "react";
import { Link } from "react-router-dom";


const Aside = () => {
  return (
      <aside className="hidden w-64 flex-col border-r bg-background p-4 md:flex">
        <div className="mb-6">
          <Link to="#" className="flex items-center gap-2 font-semibold" >
            <BookIcon className="h-6 w-6" />
            <span>Alexandria Content Management</span>
          </Link>
        </div>
        <nav className="flex flex-col space-y-1">
          <Link
            to="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            
          >
            <UsersIcon className="h-4 w-4" />
            <span>Authors</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          >
            <UsersIcon className="h-4 w-4" />
            <span>Users</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <BookIcon className="h-4 w-4" />
            <span>Generic Content</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <BookIcon className="h-4 w-4" />
            <span>Content Type</span>
          </Link>
        </nav>
      </aside>);
};

export default Aside