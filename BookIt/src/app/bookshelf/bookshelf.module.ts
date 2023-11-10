import { NgModule } from "@angular/core";

import { BookshelfComponent } from "./bookshelf.component";
import { BookshelfHomeComponent } from "./bookshelf-home/bookshelf-home.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookFormReactiveComponent } from "./book-form-reactive/book-form-reactive.component";
import { BookFormTdComponent } from "./book-form-td/book-form-td.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookshelfRoutingModule } from "./bookshelf-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditComponent } from "./edit/edit.component";

@NgModule({
    declarations: [
        BookshelfComponent,
        BookshelfHomeComponent,
        BookDetailsComponent,
        BookFormReactiveComponent,
        BookFormTdComponent,
        BookListComponent,
        EditComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        BookshelfRoutingModule
    ]
})

export class BookshelfModule {}