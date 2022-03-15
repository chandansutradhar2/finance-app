import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('h2') h2Element!: ElementRef;
  userName: string = '';
  constructor() {
    //here we want to access html
    this.h2Element.nativeElement;
  }
}
