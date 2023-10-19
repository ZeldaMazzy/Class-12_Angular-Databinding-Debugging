import { Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";
import { TEST_SEARCH_LIST } from "../shared/book/book.constants";

@Injectable({
    providedIn: "root"
})
export class LibraryService {
    private allLibraryBooks: Book[] = TEST_SEARCH_LIST.slice();

    public getBooks(): Book[] {
        return this.allLibraryBooks.slice();
    }
}