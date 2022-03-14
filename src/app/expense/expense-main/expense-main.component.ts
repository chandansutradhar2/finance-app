import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';

@Component({
  selector: 'app-expense-main',
  templateUrl: './expense-main.component.html',
  styleUrls: ['./expense-main.component.css'],
})
export class ExpenseMainComponent implements OnInit {
  expenses: Expense[] = [];
  constructor() {}

  ngOnInit(): void {}

  onNewExp(exp: Expense) {
    this.expenses.push(exp);
  }
}
