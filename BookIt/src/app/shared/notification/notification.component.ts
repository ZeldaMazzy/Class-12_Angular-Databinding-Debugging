import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  private bookSubscription$ = new Subscription();

  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    this.bookSubscription$ = this.bookshelfService.bookSelected.subscribe(book =>
      {
        const message: string = "This book was selected: " + book.title;
        console.log(message);
        alert(message)
    })
  }

  ngOnDestroy(): void {
    this.bookSubscription$.unsubscribe();
  }

}
