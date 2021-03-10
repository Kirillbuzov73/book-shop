import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookModel } from 'src/app/book/book.interfaces';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
  @Input() item: BookModel;
  @Input() amount: number;

  @Output() add: EventEmitter<string> = new EventEmitter();
  @Output() subtract: EventEmitter<string> = new EventEmitter();
  @Output() delete: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSubtract(): void {
    this.subtract.emit(this.item.name);
  }

  onAdd(): void {
    this.add.emit(this.item.name);
  }

  onDelete(): void {
    this.delete.emit(this.item.name);
  }
}
