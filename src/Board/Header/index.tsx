import * as React from 'react';

import './styles.scss';
import { Avatar } from 'Board/Avatar';

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="header">
      <div className="header__title">
        <h3>
          {title || 'Studio'}
        </h3>
      </div>
      <div className="header__avatars">
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
    </div>
  );
}
