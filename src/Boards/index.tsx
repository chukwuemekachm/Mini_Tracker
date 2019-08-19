import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';

import './styles.scss';
import { GET_BOARDS } from 'Provider';
import Form from 'Boards/Form';

export default function Boards({ history }) {
  const { loading, data: { boards } } = useQuery(GET_BOARDS);

  if (loading) return null;

  function handleClick(boardId) {
    return history.push(boardId);
  }

  return (
    <div className="boards">
      {
        boards.map(({ title, tasks, id }) => (
          <div className="boards__card" key={title} onClick={() => handleClick(id)}>
            <h4 className="boards__card--title">{title}</h4>
            <div className="boards__card--footer">
              <i className="icon ion-ios-list boards__card--footer--icon" />
              <span className="boards__card--footer--count">{tasks.length}</span>
            </div>
          </div>
        ))
      }
      <Form />
    </div>
  );
}
