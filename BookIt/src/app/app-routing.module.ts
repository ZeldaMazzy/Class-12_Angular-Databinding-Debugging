import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BookshelfComponent } from "./bookshelf/bookshelf.component";
import { LibraryComponent } from "./library/library.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";

const routes: Route[] = [
    {path: "", pathMatch: "full", redirectTo: "bookshelf"},
    {path: "bookshelf", component: BookshelfComponent},
    {path: "library", component: LibraryComponent},
    {path: "**", component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}