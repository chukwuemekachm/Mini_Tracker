import { gql } from 'apollo-boost';

export const GET_TASKS = gql`
  {
    tasks {
      id
      title
      stage
      priority
      items {
        title
      }
    }
  }
`;

export const GET_BOARDS = gql`
  {
    boards {
      title
      id
      tasks {
        id
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_BOARD = gql`
  query getBoard($boardId: ID!) {
    board(where: { id: $boardId } ) {
      id
      title
      tasks {
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
  }
`;
