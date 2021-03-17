import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BookModel } from '../book/book.interfaces';
import { CartTable } from '../cart/cart.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalQuantity = 0;
  totalSum = 0;
  isCartDataUpdated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  purchasesTable: CartTable = {};
  uniquePurchases: Set<BookModel> = new Set<BookModel>();

  constructor() { }

  addBook(book: BookModel): void {
    if (book) {
      if (!this.purchasesTable[book.name]) {
        this.purchasesTable[book.name] = 1;
        this.uniquePurchases.add(book);
      } else {
        this.purchasesTable[book.name] = ++this.purchasesTable[book.name];
      }
    }
    console.log('added', this.purchasesTable);
    console.log('added', this.uniquePurchases);
    this.updateCartData();
  }

  removeBook(name: string): void {
    this.purchasesTable[name] = 0;
    for (const item of this.uniquePurchases) {
      if (item.name === name) {
        this.uniquePurchases.delete(item);
        break;
      }
    }
    console.log('removed', this.purchasesTable);
    console.log('removed', this.uniquePurchases);
    this.updateCartData();
  }

  increaseQuantity(name: string): void {
    this.purchasesTable[name] = ++this.purchasesTable[name];
    this.updateCartData();
  }

  decreaseQuantity(name: string): void {
    if (this.purchasesTable[name] <= 1) {
      this.removeBook(name);
    } else {
      this.purchasesTable[name] = --this.purchasesTable[name];
      this.updateCartData();
    }
  }

  removeAllBooks(): void { }

  updateCartData(): void {
    this.totalQuantity = 0;
    this.totalSum = 0;
    for (const item of this.uniquePurchases) {
      this.totalQuantity += this.purchasesTable[item.name];
      this.totalSum += item.price * this.purchasesTable[item.name];
    }
    this.isCartDataUpdated.next(true);
  }
}
