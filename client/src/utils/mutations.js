import { gql } from '@apollo/client';

export const CREATE_SearchBooks = gql`
  mutation createSearchBooks($authors: String!, $description: String!, $bookId: String!, $image: String!, $link: String!, $title: String!) {
    createSearchBooks(authors: $authors, description: $description) {
      authors
      description
      }
  }
`;

export const CREATE_SavedBooks = gql`
  mutation createSavedBooks($bookId: String!, $title: String!) {
    createSavedBooks(bookId: $bookId, title: $title) {
      bookId
      image
      link
      tittle
    }
  }
`;