import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-investment-main',
  templateUrl: './investment-main.component.html',
  styleUrls: ['./investment-main.component.css'],
})
export class InvestmentMainComponent implements OnInit {
  constructor(private authSvc: AuthService) {
    console.log('investement main', authSvc.user);
  }

  ngOnInit(): void {}
}
