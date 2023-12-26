import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectBookCollection,
  selectBooks,
} from './store/reducer/collection.reducer';
import { BooksActions, BooksApiActions } from './store/action/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private store: Store) {}

  public ngOnInit() {
    this.store.dispatch(BooksApiActions.loadBookList());
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
