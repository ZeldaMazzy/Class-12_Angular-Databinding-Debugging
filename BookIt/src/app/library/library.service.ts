import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";
import { TEST_BOOK_LIST, TEST_SEARCH_LIST } from "../shared/book/book.constants";

@Injectable({
    providedIn: "root"
})
export class LibraryService {
    libraryListChanged: EventEmitter<Book[]> = new EventEmitter();

    private allLibraryBooks: Book[] = TEST_SEARCH_LIST.slice();

    public getBooks(): Book[] {
        return this.allLibraryBooks.slice();
    }


}