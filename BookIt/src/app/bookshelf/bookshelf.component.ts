import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { EMPTY_BOOK } from '../shared/book/book.constants';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  bookToDisplay: Book = EMPTY_BOOK;

  constructor(private bookshelfService: BookshelfService){}

  ngOnInit(): void {
    this.bookshelfService.bookSelected.subscribe(
      book => this.bookToDisplay = book
    )
  }

  selectBook(selectedBook: Book): void {
    this.bookshelfService
  }

  get bookIsSelected(): boolean {
    return this.bookToDisplay.title != '' && this.bookToDisplay.author != ''
  }
}