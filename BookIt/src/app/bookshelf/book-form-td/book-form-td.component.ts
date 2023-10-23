import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-form-td',
  templateUrl: './book-form-td.component.html',
  styleUrls: ['./book-form-td.component.css']
})
export class BookFormTdComponent {
  formWasSubmitted: boolean = false;
  bookDetails: Book;

  submitBook(bookFormObject: NgForm): void {
    if(bookFormObject.invalid) return;
    console.log("Submitted! Here is what we submitted: ", bookFormObject)

    this.bookDetails = {
      title: bookFormObject.value.title,
      author: bookFormObject.value.author,
      genre: bookFormObject.value.genre,
      coverImgPath: "https://images.unsplash.com/photo-1516900448138-898720b936c7"
    }

    this.formWasSubmitted = true;
    bookFormObject.reset()
  }
}