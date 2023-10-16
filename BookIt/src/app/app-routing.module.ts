import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BookshelfComponent } from "./bookshelf/bookshelf.component";
import { LibraryComponent } from "./library/library.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';

const routes: Route[] = [
    { path: "", pathMatch: "full", redirectTo: "bookshelf"},
    { path: "bookshelf", 
        component: BookshelfComponent,
        children: [
            { path: "", pathMatch: "full", component: BookshelfHomeComponent },
            { path: ":book-id", component: BookDetailsComponent }
        ]
    },
    { path: "library", component: LibraryComponent},
    { path: "**", component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}