import { NgModule } from "@angular/core";
import { PreloadAllModules, Route, RouterModule } from "@angular/router";
import { AuthGuard } from './auth/http-utility/auth.guard';
import { NotFoundComponent } from "./shared/not-found/not-found.component";

const routes: Route[] = [
    { path: "", pathMatch: "full", redirectTo: "bookshelf"},
    { 
        path: "authentication", 
        loadChildren: () => 
            import("./auth/auth.module")
            .then(m => m.AuthModule)
    },
    {
        path: "bookshelf",
        loadChildren: () => 
            import("./bookshelf/bookshelf.module")
            .then(m => m.BookshelfModule),
        canActivate: [AuthGuard]
    },
    {
        path: "library",
        loadChildren: () => 
            import("./library/library.module")
            .then(m => m.LibraryModule),
        canActivate: [AuthGuard]
    },
    { path: "**", component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
        initialNavigation: "enabled"
      })],
    exports: [RouterModule]
})
export class AppRoutingModule{}