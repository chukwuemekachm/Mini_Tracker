import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';

import './styles.scss';
import { BoardContext } from 'Board';
import { CREATE_TASK, GET_BOARD, tasksReducer } from 'Provider';

interface FormProps {
  id?: string;
  stage?: string;
  setShowForm?: any;
}

function Form({ id, stage, setShowForm }: FormProps) {
  const [title, setTitle] = React.useState('');

  const [createTask] = useMutation(CREATE_TASK, {
    update(cache, { data: { createTask: newTask } }) {
      const { board } = cache.readQuery({ query: GET_BOARD, variables: { boardId: id } });
      const tasks = tasksReducer.createTask(board.tasks, newTask);

      setTitle('');
      setShowForm && setShowForm(true);
      return cache.writeQuery({
        query: GET_BOARD,
        variables: { boardId: id },
        data: { board: { ...board, tasks } },
      });
    }
  });

  function addTask() {
    const variables = {
      task: {
        title,
        stage,
        board: {
          connect: {
            id,
          },
        },
      },
    };
    createTask({ variables });
  }

  function cancel() {
    setTitle('');
    return setShowForm && setShowForm(false);
  }

  return (
    <div className="form">
      <textarea
        className="form__input"
        placeholder="Enter the title for your task..."
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <div className="form__footer">
        <button
          className="form__footer--submit"
          onClick={() => addTask()}
        >
          Add Task
        </button>
        <button
          className="form__footer--cancel"
          onClick={() => cancel()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default function ({ stage, setShowForm }) {
  return (
    <BoardContext.Consumer>
      {value => <Form {...value} stage={stage} setShowForm={setShowForm} />}
    </BoardContext.Consumer>
  );
}
