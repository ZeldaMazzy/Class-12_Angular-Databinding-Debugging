import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { BookComponent } from './book/book.component';
import { PlaceholderDirective } from './directives/placeholder/placeholder.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AlertComponent,
    BookComponent,
    PlaceholderDirective,
    NavigationComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AlertComponent,
    BookComponent,
    PlaceholderDirective,
    NavigationComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
