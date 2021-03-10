import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookCategory, BookModel } from './book/book.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  purchasedBook: BookModel;
  @ViewChild('appTitle', { static: false })
  appTitle: ElementRef;
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

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = 'Book shop'.toLocaleUpperCase();
    console.log(this.appTitle.nativeElement.textContent);
  }

  onBuy(book: BookModel): void {
    const newBook: BookModel = { ...book } as BookModel;
    this.purchasedBook = newBook;
  }
}
