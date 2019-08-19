import React from 'react';

import './styles.scss';

interface TaskProps {
  handleModalToggle: () => void;
  task: any;
}

interface TaskState {}

export class Task extends React.Component<TaskProps, TaskState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="task">
        <div className="task__header">
          <i className="icon ion-md-menu" />
          <input className="task__header--title" value="It's mu time with you" />
          <i className="icon ion-md-close task__header--close" />
        </div>
        <div className="task__board">on "The Vampire Diaries" board</div>
      </div>
    );
  }
}
