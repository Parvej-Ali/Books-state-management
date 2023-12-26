import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { BooksActions } from '../action/books.actions';
import { Book } from '../model/books.model';

export const initialState: ReadonlyArray<string> = [];

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);

export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);
