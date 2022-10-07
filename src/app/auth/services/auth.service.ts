import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from 'src/app/shared/configs/api';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userData: any = null;

  constructor(private http: HttpClient,
    private router: Router) { }

  ///Login Api intigration

  logIn(body: any) {
    return this.http.post(api.auth.login, body);
  }

  ///For Logout and to clear local storage 
  logout() {
    this.userData = {};
    localStorage.setItem("userdata", "{}");
    // localStorage.clear();
    this.router.navigate(["/auth"]);

  }
}

