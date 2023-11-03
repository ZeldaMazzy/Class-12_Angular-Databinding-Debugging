import { Component, OnInit } from '@angular/core';
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
    // this.bookList = this.bookshelfService.getAllBooks()
    this.bookshelfService.getAllBooks();
    this.bookshelfService.bookListChanged.subscribe(
      books => {
        this.bookList = books.slice();
      }
    )
  }

  onRemoveBook(bookIndex): void {
    this.bookshelfService.removeBookByIndex(bookIndex);
  }
}
