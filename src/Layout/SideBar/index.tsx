import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export function SideNar() {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <i className="icon ion-md-people" />
          <Link to="/">Manage</Link>
        </li>
        <li>
          <i className="icon ion-md-grid" />
          <Link to="/">Boards</Link>
        </li>
        <li>
          <i className="icon ion-md-calendar" />
          <Link to="/">Schedule</Link>
        </li>
        <li>
          <i className="icon ion-md-stats" />
          <Link to="/">Reports</Link>
        </li>
        <li>
          <i className="icon ion-md-settings" />
          <Link to="/">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
