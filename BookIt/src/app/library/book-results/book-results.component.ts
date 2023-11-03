import { Component, OnInit } from '@angular/core';
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
  public componentState: number = state.PRE_SEARCH;

  constructor(
    private bookshelfService: BookshelfService,
    private libraryService: LibraryService
  ){}

  ngOnInit(): void {
    this.libraryService.bookList$.subscribe(
      searchResults => {
        this.bookList = searchResults.slice();
        if(searchResults.length == 0) this.componentState = state.NO_RESULTS;
        else this.componentState = state.WITH_RESULTS;
      }
    )
  }

  onSaveBook(book: Book): void {
    this.bookshelfService.createBook(book);
  }

  public get state() {
    return state;
  }
}

enum state {
  PRE_SEARCH,
  NO_RESULTS,
  WITH_RESULTS
}