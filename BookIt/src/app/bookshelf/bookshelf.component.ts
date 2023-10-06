import { Component } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { EMPTY_BOOK } from '../shared/book/book.constants';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent {
  bookToDisplay: Book = EMPTY_BOOK;

  selectBook(selectedBook: Book): void {
    this.bookToDisplay = selectedBook;
  }

  get bookIsSelected(): boolean {
    return this.bookToDisplay.title != '' && this.bookToDisplay.author != ''
  }
}