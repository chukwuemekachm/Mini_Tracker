import * as React from 'react';

import './styles.scss';

interface CardProps {
  title: string;
  priority: string;
  items?: any[];
  id: string;
  handleDragStart: any;
  handleModalToggle: () => void;
}

export function Card({ title, priority, items = [], id, handleDragStart }: CardProps) {
  return (
    <div className="card" draggable onDragStart={handleDragStart} id={id}>
      <span className={`card__tag-${priority}`}>{priority} Priority</span>
      <h5 className="card__title">{title}</h5>
      <div className="card__footer">
        <i className="icon ion-ios-list card__footer--icon" />
        <span className="card__footer--count">{items.length}</span>
        <i className="icon ion-ios-link card__footer--icon" />
        <span className="card__footer--count">{items.length}</span>
      </div>
    </div>
  );
}
