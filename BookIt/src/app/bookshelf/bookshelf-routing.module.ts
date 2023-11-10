import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookshelfHomeComponent } from "./bookshelf-home/bookshelf-home.component";
import { BookshelfComponent } from "./bookshelf.component";
import { EditComponent } from "./edit/edit.component";

import { AuthGuard } from "../auth/http-utility/auth.guard";

const routes: Routes = [
    { path: "", 
        component: BookshelfComponent,
        canActivate: [AuthGuard],
        children: [
            { path: "", pathMatch: "full", component: BookshelfHomeComponent },
            { path: "new-book", component: EditComponent },
            { path: ":book-id", component: BookDetailsComponent },
            { path: ":book-id/edit", component: EditComponent }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BookshelfRoutingModule {}