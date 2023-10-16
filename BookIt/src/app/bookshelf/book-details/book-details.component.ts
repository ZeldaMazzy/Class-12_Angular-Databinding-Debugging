import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookshelfService: BookshelfService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const index = +params["book-id"];
      console.log("The URL Changed. This is what comes after bookshelf/ - ", index)
      this.book = this.bookshelfService.getBookByIndex(index);
    })
  }
}
