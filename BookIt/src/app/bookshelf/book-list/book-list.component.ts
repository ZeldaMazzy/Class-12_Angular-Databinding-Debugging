import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TEST_BOOK_LIST } from 'src/app/shared/book/book.constants';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
  public bookList: Book[] = [];

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.bookList = this.bookshelfService.getAllBooks()

    this.bookshelfService.bookListChanged.subscribe(
      books => {
        this.bookList = books.slice();
        console.log("Book list was changed: ", books);
      }
    )
  }

  onRemoveBook(bookIndex): void {
    console.log("I am in the component. We are deleting book number ", bookIndex);
    console.log("The book at position number ", bookIndex, " is ", this.bookList[bookIndex])
    this.bookshelfService.removeBookByIndex(bookIndex);
  }

  handleBookSelection() {}
}
