import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  bookIndex: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookshelfService: BookshelfService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.bookIndex = +params["book-id"];
      this.book = this.bookshelfService.getBookByIndex(this.bookIndex);
      this.bookshelfService.bookSelected.next(this.book);
    })
  }

  onEditBook(): void {
    this.router.navigate(["../", this.bookIndex, "edit"], {relativeTo: this.activatedRoute})
  }

  onRemoveBook(): void {
    this.bookshelfService.removeBookByIndex(this.bookIndex);
    this.router.navigate(["/bookshelf"])
  }
}
