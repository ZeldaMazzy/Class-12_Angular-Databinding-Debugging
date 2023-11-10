import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { BookResultsComponent } from './book-results/book-results.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LibraryComponent,
    BookResultsComponent,
    BookSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
