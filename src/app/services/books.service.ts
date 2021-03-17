import { Injectable } from '@angular/core';
import { BookCategory, BookModel } from '../book/book.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: BookModel[] = [
    {
      name: 'Book 1',
      description: 'Book 1 description',
      price: 100,
      category: BookCategory.Detective,
      createDate: null,
      isAvailable: true,
    },
    {
      name: 'Book 2',
      description: 'Book 2 description',
      price: 200,
      category: BookCategory.Novel,
      createDate: 1615671349074,
      isAvailable: false,
    },
    {
      name: 'Book 3',
      description: 'Book 3 description',
      price: 300,
      category: BookCategory.Fantasy,
      createDate: 1615661249074,
      isAvailable: true,
    },
    {
      name: 'Book 4',
      description: 'Book 4 description',
      price: 400,
      category: BookCategory.None,
      createDate: null,
      isAvailable: true,
    },
    {
      name: 'Book 5',
      description: 'Book 5 description',
      price: 500,
      category: BookCategory.Detective,
      createDate: 1615671999074,
      isAvailable: true,
    },
  ];

  constructor() { }

  getBooks(): Array<BookModel> {
    return this.books;
  }
}
