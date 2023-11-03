import { Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";
import { HttpClient } from "@angular/common/http";
import { Q } from "../shared/utility/utility.const";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LibraryService {

    public bookList$: Subject<Book[]> = new Subject();
    private librarySearchResults: Book[] = [];
    private readonly baseURL: string = 'http://openlibrary.org/search.json?'

    constructor(private http: HttpClient) { }

    public fetchBooks(searchQuery: string): void {
        this.librarySearchResults = [];

        const request = this.splitSearch(searchQuery);

        this.http.get(this.baseURL + Q.GENERAL + request)
            .subscribe(response => {
                this.saveBooks(response);
                this.bookList$.next(this.librarySearchResults)
            });
    }

    private saveBooks(bookResponse: any): void {
        bookResponse.docs.slice(0, 11).forEach((book: any) => {
            const { title, author_name, first_publish_year, isbn } = book;
            const newBook: Book = new Book(
                title,
                author_name,
                "",
                "https://tse2.mm.bing.net/th?id=OIP.I6LGwie40Vw4K8gmV52MKwHaLc&pid=Api&P=0&w=300&h=300",
                0,
                first_publish_year,
                isbn
            );

            this.librarySearchResults.push(newBook);
        });
    }

    private splitSearch(searchQuery: string): string {
        return searchQuery.split(" ").join("+").toLowerCase();
    }
}