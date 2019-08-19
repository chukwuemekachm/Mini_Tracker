import { gql } from 'apollo-boost';

export const UPDATE_TASK_STAGE = gql`
  mutation updateTask($data: TaskUpdateInput!, $taskId: ID!) {
    updateTask(data: $data, where: { id: $taskId }) {
      id
      title
      priority
      stage
      items {
        title
      }
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($task: TaskCreateInput!) {
    createTask(data: $task) {
      id
      title
      priority
      stage
      items {
        title
      }
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($board: BoardCreateInput!) {
    createBoard(data: $board) {
      id
      title
      tasks {
        id
      }
      createdAt
      updatedAt
    }
  }
`;
