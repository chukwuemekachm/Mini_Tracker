import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';

import './styles.scss';
import { CREATE_BOARD, boardsReducer, GET_BOARDS } from 'Provider';

interface FormProps {
  id?: string;
  stage?: string;
  setShowForm?: any;
}

function Form() {
  const [title, setTitle] = React.useState('');
  const [showForm, setShowForm] = React.useState(true);

  const [createBoard] = useMutation(CREATE_BOARD, {
    update(cache, { data: { createBoard: newBoard } }) {
      let { boards } = cache.readQuery({ query: GET_BOARDS });
      boards = boardsReducer.createBoard(boards, newBoard);
      
      setTitle('');
      return cache.writeQuery({
        query: GET_BOARDS,
        data: { boards },
      });
    },
  });

  function addBoard() {
    const variables = {
      board: {
        title
      },
    };

    createBoard({ variables });
  }

  return (
    <div className="boards-form">
      {
        showForm
          ? <>
            <textarea
              className="boards-form__input"
              placeholder="Enter the title for your board..."
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
            <div className="boards-form__footer">
              <button
                className="boards-form__footer--submit"
                onClick={() => addBoard()}
              >
                Add Board
              </button>
              <button
                className="boards-form__footer--cancel"
                onClick={() => setTitle('')}
              >
                Cancel
              </button>
            </div>
          </>
          : <div className="boards-form__create">
            <i className="icon ion-md-add-circle-outline boards-form__create--icon" />
          </div>
      }
    </div>
  );
}

export default Form;
