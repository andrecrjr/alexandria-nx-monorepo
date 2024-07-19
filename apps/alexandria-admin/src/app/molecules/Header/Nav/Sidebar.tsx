import { BookIcon } from '@alexandria/shadcn-ui';
import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = ({ children }: { children: React.ReactNode }) => (
  <aside className="hidden w-64 flex-col border-r bg-background p-4 md:flex">
    <div className="mb-6">
      <Link to="#" className="flex items-center gap-2 font-semibold">
        <BookIcon className="h-6 w-6" />
        <span>Alexandria Management</span>
      </Link>
    </div>
    {children}
  </aside>
);
