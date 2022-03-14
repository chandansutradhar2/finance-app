import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

const rootUrls: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'expenses',
    component: AddExpenseComponent,
  },
  {
    path: 'investment',
    loadChildren: () =>
      import('./investment/investment.module').then(
        (investMdl) => investMdl.InvestmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rootUrls)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
