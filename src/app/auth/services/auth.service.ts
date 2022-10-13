import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from 'src/app/shared/configs/api';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userData: any ;

  constructor(private http: HttpClient,
    private router: Router) { this.userData=localStorage.getItem('userData') ;
    this.userData=JSON.parse(this.userData)
  }

  ///Login Api intigration

  logIn(body: any) {
    return this.http.post(api.auth.login, body);
  }

  ///For Logout and to clear local storage 
  logout() {
    this.userData = {};
    localStorage.setItem("userData", "{}");
    // localStorage.clear();
    this.router.navigate(["/auth"]);

  }
}

