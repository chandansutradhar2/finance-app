import { NgModule } from '@angular/core';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { DebtFundComponent } from './debt-fund/debt-fund.component';
import { AddInvestmentComponent } from './add-investment/add-investment.component';
import { StocksComponent } from './stocks/stocks.component';

@NgModule({
  declarations: [
    MutualFundComponent,
    DebtFundComponent,
    AddInvestmentComponent,
    StocksComponent,
  ], //every component of this module will be eneterd into dec array
  imports: [], // all modules/classes this module needs,
  exports: [], //all component this module want other to use
})
export class InvestmentModule {}
