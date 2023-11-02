import { Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";
import { HttpClient } from "@angular/common/http";
import { Q } from "../shared/utility/utility.const";

@Injectable({
    providedIn: "root"
})
export class LibraryService {

    private librarySearchResults: Book[] = [];
    private readonly baseURL: string = 'http://openlibrary.org/search.json?'

    constructor(private http: HttpClient) { }

    public fetchBooks(searchQuery: string): void {
        this.librarySearchResults = [];

        const request = this.splitSearch(searchQuery);
        console.log("Query after splitting: ", request);

        this.http.get(this.baseURL + Q.GENERAL + request)
            .subscribe(response => {
                console.log(response);
                this.saveBooks(response)
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

        console.log("All books: ", this.librarySearchResults)
    }

    private splitSearch(searchQuery: string): string {
        console.log("Query before splitting: ", searchQuery);
        return searchQuery.split(" ").join("+").toLowerCase();
    }
}