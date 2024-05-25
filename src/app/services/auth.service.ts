import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUserSubject = new BehaviorSubject<IUser | null>(null);
  loggedUser$ = this.loggedUserSubject.asObservable();

  constructor(private router: Router) {
    this.loggedUserSubject.next(this.getLoggedUser());
  }

  getLoggedUser() {
    return JSON.parse(localStorage.getItem("loggedUser") || "null");
  }

  loginUser(user: IUser): boolean {
    if (user.email == "admin@tshirt.com" && user.password ==  "tshirt123") {
      localStorage.setItem("loggedUser", JSON.stringify(user));
      this.loggedUserSubject.next(this.getLoggedUser());
      this.router.navigate(['tshirt']);
      return true;
    }
    return false;
  }

  logoutUser() {
    localStorage.removeItem("loggedUser");
    this.loggedUserSubject.next(null);
    this.router.navigate(['login']);
  }

  isAuthenticated() {
    return this.loggedUserSubject.getValue() != null;
  }
}