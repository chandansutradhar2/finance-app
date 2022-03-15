import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-expense-filter',
  templateUrl: './expense-filter.component.html',
  styleUrls: ['./expense-filter.component.css'],
})
export class ExpenseFilterComponent implements OnInit, OnChanges {
  @Input() filterOptions: any;
  @Input() userName!: string;
  constructor() {
    console.log('initial filter options', this.filterOptions);
  }
  ngOnChanges(changes: SimpleChanges): void {
    alert(JSON.stringify(changes));
  }

  ngOnInit(): void {
    console.log('post init filteroptions', this.filterOptions);
  }

  generateEvent() {
    console.log(this.filterOptions);
  }
}
