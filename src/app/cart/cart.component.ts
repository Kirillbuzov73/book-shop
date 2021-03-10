import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../book/book.interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private _purchase: BookModel;
  purchasesTable = {};
  uniquePurchases = new Set<BookModel>();

  @Input() set purchase(book: BookModel) {
    if (book) {
      this._purchase = book;
      if (!this.purchasesTable[book.name]) {
        this.purchasesTable[book.name] = 1;
        this.uniquePurchases.add(book);
      } else {
        this.purchasesTable[book.name] = ++this.purchasesTable[book.name];
      }
    }
    console.log(this.purchasesTable);
    console.log(this.uniquePurchases);
  }

  get purchase(): BookModel {
    return this._purchase;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(name: string): void {
    this.purchasesTable[name] = ++this.purchasesTable[name];
  }

  onSubtract(name: string): void {
    if (this.purchasesTable[name] <= 1) {
      this.purchasesTable[name] = 0;
      for (const item of this.uniquePurchases) {
        if (item.name === name) {
          this.uniquePurchases.delete(item);
          break;
        }
      }
    } else {
      this.purchasesTable[name] = --this.purchasesTable[name];
    }
  }

  onDelete(name: string): void {
    this.purchasesTable[name] = 0;
    for (const item of this.uniquePurchases) {
      if (item.name === name) {
        this.uniquePurchases.delete(item);
        break;
      }
    }
  }
}
