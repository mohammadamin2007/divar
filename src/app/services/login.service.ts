import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn = false
  userPhoneNumber = ""

  constructor() {
    this.loggedIn = localStorage.getItem("loggedIn") !== undefined? localStorage.getItem("loggedIn") === "true": false;
  }

  loginUser(phoneNumber: string) {
    this.userPhoneNumber = phoneNumber;
    this.loggedIn = true;
    localStorage.setItem("loggedIn", "true");
  }

  logoutUser() {
    this.userPhoneNumber = "";
    this.loggedIn = false;
  }

}
