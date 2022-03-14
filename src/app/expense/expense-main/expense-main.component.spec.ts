import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseMainComponent } from './expense-main.component';

describe('ExpenseMainComponent', () => {
  let component: ExpenseMainComponent;
  let fixture: ComponentFixture<ExpenseMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
