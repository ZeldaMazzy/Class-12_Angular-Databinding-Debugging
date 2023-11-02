import { Component } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {

  constructor(private libraryService: LibraryService) {}

  public fetchBooks(searchQuery: string): void {
    this.libraryService.fetchBooks(searchQuery);
  }
}