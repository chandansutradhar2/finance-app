import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Expense } from 'src/app/models/expense.model';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
})
export class AddExpenseComponent implements OnInit {
  @Output() onNewExp: EventEmitter<Expense> = new EventEmitter();
  categories: string[] = [
    'groceries',
    'travel',
    'food',
    'emi',
    'misc',
    'entertainment',
  ];
  expName: string = '';

  expFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.expFormGroup = fb.group({
      title: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      expDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.expFormGroup.controls['title'].valueChanges.subscribe((r) => {
      console.log(r);
    });
  }

  addExpense() {
    console.log(this.expFormGroup.value);
    if (this.expFormGroup.invalid) {
      return;
    }

    let expense: Expense = {
      amount: this.expFormGroup.get('amount')?.value,
      category: this.expFormGroup.get('category')?.value,
      createdBy: 'chandan',
      createdOn: Date.now(),
      expDate: this.expFormGroup.get('expDate')?.value,
      title: this.expFormGroup.get('title')?.value,
    };

    //todo submit to server for storage
    this.onNewExp.emit(expense);
  }
}
