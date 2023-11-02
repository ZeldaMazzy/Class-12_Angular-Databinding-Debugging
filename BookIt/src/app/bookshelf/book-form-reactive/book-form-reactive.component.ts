import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css']
})
export class BookFormReactiveComponent {
  formWasSubmitted: boolean = false;
  bookDetails: Book;
  bookDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.buildForm()
  }

  submitBook(): void {
    if(this.bookDetailsForm.invalid) return;
    this.formWasSubmitted = true;

    console.log(this.bookDetailsForm.value);
    this.bookDetails = {
      ...this.bookDetailsForm.value,
      coverImgPath: "https://images.unsplash.com/photo-1516900448138-898720b936c7"
    }

    setTimeout(() => {
      this.bookDetailsForm.reset();
      this.formWasSubmitted = false;
    }, 5000);
  }

  private buildForm(): void {
    this.bookDetailsForm = this.formBuilder.group(
      {
        title: ["", [Validators.required, Validators.maxLength(50)]],
        author: ["", [Validators.required, Validators.maxLength(50)]],
        genre: ["", Validators.required]
      }
    )
  }

  public getErrors(controlName: string, errorType: string = "required"): boolean {
    return this.bookDetailsForm.get(controlName).hasError(errorType)
  }
}
