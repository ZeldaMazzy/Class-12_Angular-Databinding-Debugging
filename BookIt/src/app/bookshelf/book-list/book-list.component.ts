import { Component, Output, EventEmitter } from '@angular/core';
import { TEST_BOOK_LIST } from 'src/app/shared/book/book.constants';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Output() bookSelectionEvent = new EventEmitter<Book>();

  public bookList: Book[] = TEST_BOOK_LIST.slice()

  handleBookSelection(selectedBook: Book): void {
    this.bookSelectionEvent.emit(selectedBook);
  }
}
