import { Injectable } from '@angular/core';
import {GlobalValueService} from "./global-value.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn = false
  userPhoneNumber: string | null

  constructor(private globalValue: GlobalValueService) {
    this.loggedIn = localStorage.getItem("loggedIn") !== undefined? localStorage.getItem("loggedIn") === "true": false;
    this.userPhoneNumber = localStorage.getItem("userPhoneNumber") !== undefined? localStorage.getItem("userPhoneNumber"): "";
  }

  loginUser(phoneNumber: string) {
    this.userPhoneNumber = phoneNumber;
    this.loggedIn = true;
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userPhoneNumber", phoneNumber);
  }

  logoutUser() {
    this.userPhoneNumber = "";
    this.loggedIn = false;
    localStorage.setItem("loggedIn", "false");
    localStorage.setItem("userPhoneNumber", "");
  }

}
