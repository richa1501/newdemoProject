import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from 'src/app/shared/configs/api';

@Injectable({
  providedIn: 'root'
})

export class SignupService {
  userData:any= null;
  constructor(private http : HttpClient) { 
    
    this.userData = localStorage.getItem("userData") || "{}";
    this.userData= JSON.parse(this.userData);
  }

signUp(body:any){ 
  return this.http.post(api.auth1.signUp,body);


}
}
