import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';

import './styles.scss';
import { Card } from 'Board/Card';
import Form from 'Board/Form';
import {
  UPDATE_TASK_STAGE,
  GET_BOARD,
  tasksReducer,
} from 'Provider/index';


interface ColumnProps {
  title: string;
  tasks: any[];
  boardId: string;
}

export function Column({ title, tasks, boardId }: ColumnProps) {
  const stage = title.replace('In Progress', 'Progress').toUpperCase();
  const [showForm, setShowForm] = React.useState(false);

  const [updateTask] = useMutation(UPDATE_TASK_STAGE, {
    update(cache, { data: { updateTask } }) {
      const { board } = cache.readQuery({ query: GET_BOARD, variables: { boardId } });
      const tasks = tasksReducer.updateTask(board.tasks, updateTask);
      return cache.writeQuery({
        query: GET_BOARD,
        variables: { boardId },
        data: { board: { ...board, tasks } },
      });
    },
  });

  function handleDrop(event) {
    const taskId = event.dataTransfer.getData("taskId");
    return updateTask({
      variables: {
        taskId,
        data: {
          stage,
        },
      },
    });
  }

  function handleDragOver(event) {
    event.preventDefault();
    return event.dataTransfer.dropEffect = "move";
  }

  function handleDragStart(event) {
    event.dataTransfer.dropEffect = "move";
    return event.dataTransfer.setData("taskId", event.target.id);
  }

  return (
    <div className="column">
      <div className="column__header">
        <h4 className="column__header--title">{title || 'Backlog'}</h4>
        <i className="icon ion-md-help column__header--info" />
      </div>
      <div className="column__body" onDragOver={handleDragOver} onDrop={handleDrop}>
        {
          tasks.length
            ? tasks.map(task => <Card {...task} key={task.title} handleDragStart={handleDragStart} />)
            : <Form stage={stage} setShowForm={setShowForm} />
        }
        {
          showForm && <Form stage={stage} setShowForm={setShowForm} />
        }
      </div>
      <div className="column__footer">
        <span className="column__footer--text" onClick={() => setShowForm(true)}>Add Task</span>
        <i className="icon ion-md-add-circle-outline column__footer--icon" />
      </div>
    </div>
  );
}
