import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookCategory, BookModel } from './book.interfaces';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit, BookModel {
  @Input() name = '';
  @Input() description = '';
  @Input() price = 0;
  @Input() category: BookCategory = BookCategory.None;
  @Input() createDate: number = Date.now();
  @Input() isAvailable = false;

  @Output() buy: EventEmitter<BookModel> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onBuy(): void {
    this.buy.emit(this);
    console.log('Added');
  }

}
