import { Component } from '@angular/core';
import { TEST_BOOK_LIST } from 'src/app/shared/book/book.constants';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent {

  public bookList: Book[] = TEST_BOOK_LIST.slice()

}
