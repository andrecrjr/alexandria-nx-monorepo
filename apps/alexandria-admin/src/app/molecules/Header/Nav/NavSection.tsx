import React from 'react';

export const NavSection = ({ children }: { children: React.ReactNode }) => (
  <nav className="flex flex-col space-y-1">{children}</nav>
);
