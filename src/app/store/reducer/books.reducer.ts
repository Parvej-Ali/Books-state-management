import { createReducer, on } from '@ngrx/store';
import { Book } from '../model/books.model';
import { BooksApiActions } from '../action/books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);
