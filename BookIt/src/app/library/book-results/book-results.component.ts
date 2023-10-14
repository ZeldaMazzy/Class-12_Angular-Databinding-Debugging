import { Component, OnInit } from '@angular/core';
import { TEST_BOOK_LIST } from 'src/app/shared/book/book.constants';
import { Book } from 'src/app/shared/book/book.model';
import { LibraryService } from '../library.service';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {

  public bookList: Book[] = [];

  constructor(
    private bookshelfService: BookshelfService,
    private libraryService: LibraryService
  ){}

  ngOnInit(): void {
    this.bookList = this.libraryService.getBooks();
  }

  onSaveBook(book: Book): void {
    this.bookshelfService.createBook(book);
  }

}
