import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookModel } from '../book/book.interfaces';
import { CartService } from '../services/cart.service';
import { CartTable } from './cart.interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  totalQuantity = 0;
  totalSum = 0;
  purchasesTable: CartTable = {};
  uniquePurchases: Set<BookModel>;
  cartSubscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.isCartDataUpdated.subscribe((isCartDataUpdated: boolean) => {
      console.log('TotalQ ', this.cartService.totalQuantity);
      if (isCartDataUpdated) {
        this.uniquePurchases = this.cartService.uniquePurchases;
        this.purchasesTable = this.cartService.purchasesTable;
        this.totalQuantity = this.cartService.totalQuantity;
        this.totalSum = this.cartService.totalSum;
      }
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  onAdd(name: string): void {
    this.cartService.increaseQuantity(name);
  }

  onSubtract(name: string): void {
    this.cartService.decreaseQuantity(name);
  }

  onDelete(name: string): void {
    this.cartService.removeBook(name);
  }
}
