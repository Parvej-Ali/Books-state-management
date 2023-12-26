import { Injectable } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksApiActions } from '../action/books.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class BooksEffects {
  constructor(private booksService: BooksService, private actions$: Actions) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksApiActions.loadBookList),
      exhaustMap(() =>
        this.booksService
          .getBooks()
          .pipe(map((res) => BooksApiActions.retrievedBookList({ books: res })))
      )
    )
  );
}
