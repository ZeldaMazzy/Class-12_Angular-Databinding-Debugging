import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookshelfService } from '../bookshelf/bookshelf.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnDestroy {

  public alert: string = "";
  private bookSubscription$: Subscription = new Subscription();

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.bookSubscription$ = this.bookshelfService.bookSelected
      .subscribe({
        next: book => {
          this.alert = `Successfully added book ${book.title} by ${book.author} to our personal bookshelf!`;
        }
      })
  }

  ngOnDestroy(): void {
    this.bookSubscription$.unsubscribe()
  }
}