import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookshelfService } from '../bookshelf.service';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  book: Book;
  isEditMode: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookshelfService: BookshelfService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params["book-id"] == null) {
        this.isEditMode = false;
        console.log("We are in Add-New-Book Mode!")
        return;
      }

      this.isEditMode = true;
      const index = +params["book-id"];
      this.book = this.bookshelfService.getBookByIndex(index);
      console.log("We are in Edit Mode. This is the book we selected: ", this.book);
    })
  }

}
