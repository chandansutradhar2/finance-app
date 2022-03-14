import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { ExpenseFilterComponent } from './expense-filter/expense-filter.component';

@NgModule({
  declarations: [
    AddExpenseComponent,
    ExpenseListComponent,
    ExpenseItemComponent,
    ExpenseFilterComponent,
  ],
  imports: [CommonModule],
  exports: [AddExpenseComponent, ExpenseListComponent],
})
export class ExpenseModule {}
