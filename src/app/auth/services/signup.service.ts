import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from 'src/app/shared/configs/api';

@Injectable({
  providedIn: 'root'
})

export class SignupService {
  userData: any;

  constructor(private http : HttpClient) { }
    
//SignUp Api Intigration

signUp(body:any){ 
  return this.http.post(api.authSignUp.signUp,body);
}
}
