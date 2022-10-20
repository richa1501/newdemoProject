

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import api from 'src/app/shared/configs/api';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordServiceService {
  changePass(arg0: { password: string | null; cpassword: string | null; }, requestOptions: { headers: import("@angular/common/http").HttpHeaders; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  changePassword(body:any,_headers:any){
    return this.http.post(api.changePass.changepassword,body,_headers);
  }

}