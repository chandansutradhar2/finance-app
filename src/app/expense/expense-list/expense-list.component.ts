import { Component, Input, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  @Input() expenses: Expense[] = [];
  constructor() {}

  ngOnInit(): void {}
}
