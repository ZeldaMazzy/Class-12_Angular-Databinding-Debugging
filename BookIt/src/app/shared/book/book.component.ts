import { Component, Input } from '@angular/core';
import { Book } from './book.model';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;
  @Input() bookIndex: number;

  transformToUpperCase(input: string): string {
    const individualWords = input.split(" ");
    individualWords.map(word => {
      const l: number = word.length;
      const firstLetter: string = word[0].toUpperCase();
      const lastLetters: string = word.slice(1, l).toLowerCase();
      return firstLetter + lastLetters
    })

    console.log("transforming");

    return individualWords.join(" ");
  }
}
