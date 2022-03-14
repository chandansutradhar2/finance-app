import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentMainComponent } from './investment-main.component';

describe('InvestmentMainComponent', () => {
  let component: InvestmentMainComponent;
  let fixture: ComponentFixture<InvestmentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
