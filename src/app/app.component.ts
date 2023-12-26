import { Component, OnInit } from '@angular/core';
import { BooksService } from './service/books.service';
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

  constructor(private booksService: BooksService, private store: Store) {}

  public ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
