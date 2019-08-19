import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';

import './styles.scss';
import { Header } from './Header';
import { Column } from './Column';
import { GET_BOARD } from 'Provider';
import { Modal } from 'Modal';
import { Task } from 'Task';
import { match } from 'react-router';

interface BoardProps {
  match: match<{ boardId: string }>;
}

interface BoardState {
  displayTask: boolean;
}

export const BoardContext = React.createContext({});

export default class Board extends React.Component<BoardProps, BoardState> {
  constructor(props) {
    super(props);
    this.state = {
      displayTask: false,
    };
    this.handleModalToggle = this.handleModalToggle.bind(this);
  }

  handleModalToggle() {

  }

  render() {
    const { match: { params: { boardId } } } = this.props;
    const { displayTask } = this.state;

    const { loading, data: { board } } = useQuery(GET_BOARD, {
      variables: { boardId },
    });

    if (loading) return null;
    const { tasks, title, id, createdAt, updatedAt } = board;
    const backlog = tasks.filter(task => task.stage === 'BACKLOG');
    const inProgress = tasks.filter(task => task.stage === 'PROGRESS');
    const review = tasks.filter(task => task.stage === 'REVIEW');
    const complete = tasks.filter(task => task.stage === 'COMPLETE');

    return (
      <BoardContext.Provider value={{ title, id, createdAt, updatedAt }}>
        <div className="board">
          <Header title={title} />
          <div className="board__columns">
            <Column tasks={backlog} title="Backlog" boardId={id} />
            <Column tasks={inProgress} title="In Progress" boardId={id} />
            <Column tasks={review} title="Review" boardId={id} />
            <Column tasks={complete} title="Complete" boardId={id} />
          </div>
          {
            displayTask && <Modal>
              <Task />
            </Modal>
          }
        </div>
      </BoardContext.Provider>
    );
  }
}
