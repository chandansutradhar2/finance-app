import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExpenseModule } from './expense/expense.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './utlity/header/header.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    ExpenseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
