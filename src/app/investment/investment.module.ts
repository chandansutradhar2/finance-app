import { NgModule } from '@angular/core';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { DebtFundComponent } from './debt-fund/debt-fund.component';
import { AddInvestmentComponent } from './add-investment/add-investment.component';
import { StocksComponent } from './stocks/stocks.component';
import { InvestmentMainComponent } from './investment-main/investment-main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const investUrls: Routes = [
  {
    path: '',
    component: InvestmentMainComponent,
    children: [
      { path: 'mutualfunds', component: MutualFundComponent },
      { path: 'debtfunds', component: DebtFundComponent },
      { path: 'shares', component: StocksComponent },
    ],
  },
];
//http://localhost:4200/investment

@NgModule({
  declarations: [
    MutualFundComponent,
    DebtFundComponent,
    AddInvestmentComponent,
    StocksComponent,
    InvestmentMainComponent,
  ], //every component of this module will be eneterd into dec array
  imports: [SharedModule, RouterModule.forChild(investUrls)], // all modules/classes this module needs,
  exports: [RouterModule], //all component this module want other to use
})
export class InvestmentModule {}
