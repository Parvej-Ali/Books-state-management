import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../store/model/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
