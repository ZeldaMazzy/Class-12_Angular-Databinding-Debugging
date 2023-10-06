import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  collapsed: boolean = true;
  show: boolean = false;

  @Output() changePage = new EventEmitter<string>();

  onSelectPage(page: string): void {
    console.log("This page was clicked: ", page);
    this.changePage.emit(page);
  }
}
