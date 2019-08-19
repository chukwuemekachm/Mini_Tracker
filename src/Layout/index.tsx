import * as React from 'react';

import './styles.scss';
import { SideNar } from 'Layout/SideBar';
import { TopNav } from 'Layout/TopNav';

interface LayoutProps {
  children?: any;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <TopNav />
      <div className="layout">
        <SideNar />
        <div className="layout__container">
          {children}
        </div>
      </div>
    </div>
  );
}
