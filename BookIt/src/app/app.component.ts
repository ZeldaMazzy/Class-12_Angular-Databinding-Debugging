import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookIt';
  currentPage: string = "bookshelf";

  changeCurrentPage(page: string): void {
    console.log("Event emitted from the navigation component: ", page);
    this.currentPage = page;
  }
}
