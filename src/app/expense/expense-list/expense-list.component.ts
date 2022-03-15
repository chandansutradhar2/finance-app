import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Expense } from 'src/app/models/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  @Input() expenses: Expense[] = [];
  constructor(private authSvc: AuthService) {
    console.log(authSvc.user);
  }

  ngOnInit(): void {}

  doSomething() {}
}
