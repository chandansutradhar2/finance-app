import { Component, OnInit, ViewChild } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { ExpenseListComponent } from '../expense-list/expense-list.component';

@Component({
  selector: 'app-expense-main',
  templateUrl: './expense-main.component.html',
  styleUrls: ['./expense-main.component.css'],
})
export class ExpenseMainComponent implements OnInit {
  expenses: Expense[] = [];
  userName: string = '';
  @ViewChild(ExpenseListComponent) expList!: ExpenseListComponent;

  filterOptions = [
    {
      name: 'nameFilter',
      filterType: [
        'filter by first name',
        'filter by last Name',
        'filter By Middle Name',
      ],
    },
    {
      name: 'amountFilter',
      filterType: [
        'filter By Highest Amount',
        'filter by Lowest amount',
        'expense > 1000',
        'expense > 1000',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.expList.doSomething();
  }

  onNewExp(exp: Expense) {
    this.expenses.push(exp);
  }

  someAction() {
    this.filterOptions.push({
      filterType: ['filter by category asc', 'category desc'],
      name: 'category',
    });
  }
}
