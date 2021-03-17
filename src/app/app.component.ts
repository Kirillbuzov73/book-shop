import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookModel } from './book/book.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle', { static: false })
  appTitle: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = 'Book shop'.toLocaleUpperCase();
  }
}
