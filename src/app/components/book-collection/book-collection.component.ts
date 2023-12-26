import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../store/model/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
