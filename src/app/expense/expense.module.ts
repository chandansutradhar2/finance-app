import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { ExpenseFilterComponent } from './expense-filter/expense-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseMainComponent } from './expense-main/expense-main.component';
import { SharedModule } from '../shared/shared.module';

const expRoutes: Routes = [{ path: '', component: ExpenseMainComponent }];
@NgModule({
  declarations: [
    AddExpenseComponent,
    ExpenseListComponent,
    ExpenseItemComponent,
    ExpenseFilterComponent,
    ExpenseMainComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(expRoutes),
    ReactiveFormsModule,
  ],
  exports: [AddExpenseComponent, ExpenseListComponent, RouterModule],
})
export class ExpenseModule {}
