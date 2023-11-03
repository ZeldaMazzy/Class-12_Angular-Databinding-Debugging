import { Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class BookshelfService {

    bookSelected: Subject<Book> = new Subject();
    bookListChanged: Subject<Book[]> = new Subject();
    private readonly firebaseURL: string = environment.firebaseRootURL;

    constructor(private http: HttpClient){}

    private globalBookList: Book[] = [];

    public getAllBooks(): void {
        this.http.get(this.firebaseURL)
            .subscribe((books: Book[] | []) => {
                this.globalBookList = books.slice() || []
                this.bookListChanged.next(books || [])
            })
    }

    public getBookByIndex(bookIndex: number): Book {
        return this.globalBookList[bookIndex]
    }

    public createBook(bookToCreate: Book): void {
        this.globalBookList.push(bookToCreate);
        this.saveBooks();
    }

    public removeBookByIndex(bookIndex: number): void {
        if(bookIndex < 0) return;

        this.globalBookList.splice(bookIndex, 1);
        this.saveBooks();
    }

    private saveBooks(): void {
        this.http.put(this.firebaseURL, this.globalBookList)
            .subscribe(() => {
                this.bookListChanged.next(this.globalBookList.slice())
            });
    }
}