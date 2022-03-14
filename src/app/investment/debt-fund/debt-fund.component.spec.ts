import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtFundComponent } from './debt-fund.component';

describe('DebtFundComponent', () => {
  let component: DebtFundComponent;
  let fixture: ComponentFixture<DebtFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
