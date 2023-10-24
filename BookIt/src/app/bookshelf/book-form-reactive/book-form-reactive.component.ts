import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css']
})
export class BookFormReactiveComponent {
  formWasSubmitted: boolean = false;
  bookDetails: Book;
  bookDetailsForm: FormGroup = new FormGroup({})  

  constructor(){}

  submitBook(): void {
    if(true) return;
    console.log("Submitted!")
  }
}
