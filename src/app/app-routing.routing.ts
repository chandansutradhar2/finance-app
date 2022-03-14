import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './admin/admin.guard';
import { AuthGuard } from './auth.guard';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

const rootUrls: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'expenses',
    canActivate: [AuthGuard],
    component: AddExpenseComponent,
  },
  {
    path: 'investment',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./investment/investment.module').then(
        (investMdl) => investMdl.InvestmentModule
      ),
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((adm) => adm.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rootUrls)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
