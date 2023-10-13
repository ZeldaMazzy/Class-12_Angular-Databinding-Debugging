import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";
import { TEST_BOOK_LIST } from "../shared/book/book.constants";

@Injectable({
    providedIn: "root"
})
export class BookshelfService {

    bookSelected: EventEmitter<Book> = new EventEmitter();
    bookListChanged: EventEmitter<Book[]> = new EventEmitter();

    private globalBookList: Book[] = TEST_BOOK_LIST.slice();

    public getAllBooks(): Book[] {
        return this.globalBookList.slice();
    }

    public getBookByIndex(bookIndex: number): Book {
        return this.globalBookList[bookIndex]
    }

    public selectBook(book: Book): void {
        this.bookSelected.emit(book);
    }

    public createBook(bookToCreate: Book): void {
        this.globalBookList.push(bookToCreate);
        this.bookListChanged.emit(this.globalBookList.slice());
    }

    public removeBookByIndex(bookIndex: number): void {
        if(bookIndex < 0) return;

        console.log("We are now in the service! We are still deleting book number ", bookIndex);
        this.globalBookList.splice(bookIndex, 1);
        console.log("The book was successfully deleted. Broadcasting the updated list now!");
        this.bookListChanged.emit(this.globalBookList.slice())

    }
}