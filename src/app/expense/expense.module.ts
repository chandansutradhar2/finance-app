import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { ExpenseFilterComponent } from './expense-filter/expense-filter.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseMainComponent } from './expense-main/expense-main.component';

const expRoutes: Routes = [{ path: '', component: ExpenseMainComponent }];
@NgModule({
  declarations: [
    AddExpenseComponent,
    ExpenseListComponent,
    ExpenseItemComponent,
    ExpenseFilterComponent,
    ExpenseMainComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(expRoutes)],
  exports: [AddExpenseComponent, ExpenseListComponent, RouterModule],
})
export class ExpenseModule {}
