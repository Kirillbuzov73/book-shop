import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookModel } from '../book/book.interfaces';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: BookModel[];

  constructor(private booksService: BooksService, private cartService: CartService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  onBuy(book: BookModel): void {
    // const newBook: BookModel = { ...book } as BookModel;
    this.cartService.addBook(book);
  }
}
