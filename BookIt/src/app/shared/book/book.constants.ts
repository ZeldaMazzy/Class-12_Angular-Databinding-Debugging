import { Book } from "./book.model";

export const EMPTY_BOOK: Book = {
    title: '',
    author: '',
    genre: '',
    coverImgPath: ''
  }

export const TEST_BOOK_LIST: Book[] = [
    new Book(
        "Clean Code", 
        "Robert Martin", 
        "Programming/NonFiction", 
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ),

    new Book(
        "Hello Beautiful", 
        "Ann Napolitano", 
        "Drama/Fiction", 
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ),

    new Book(
        "Fellowship of the Ring", 
        "JRR Tolkein", 
        "Accurate Historical Retelling / Nonfiction", 
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    )
]