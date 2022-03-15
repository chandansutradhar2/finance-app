import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user!: User;
  constructor() {
    console.log('Auth service init', this.user);
  }

  public get user(): User {
    return this._user;
  }

  public set user(v: User) {
    this._user = v;
  }
}
