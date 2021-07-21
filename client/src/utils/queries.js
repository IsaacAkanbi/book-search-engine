import { gql } from '@apollo/client';

export const QUERY_BOOK = gql`
  query book {
    book {
      authors
      description
    }
  }
`;

export const QUERY_SAVED = gql`
  query saved($bookId: String) {
    saved(bookId: $bookId) {
      bookId
      image
      link
      title
    }
  }
`;