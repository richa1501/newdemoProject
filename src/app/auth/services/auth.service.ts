

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from 'src/app/shared/configs/api';
import { tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  userdata:any= null;
  
  
  constructor(private http : HttpClient,
    private router: Router) { 

    this.userdata = localStorage.getItem("userdata") || "{}";
    this.userdata= JSON.parse(this.userdata);    
  }


  logIn(body:any){
   
   return this.http.post(api.auth.login, body).pipe(
    tap((response)=>{
      localStorage.setItem("userdata",JSON.stringify(response));
      this.userdata=response ;     
      
      this.router.navigate(["/admin"]);
    })
   )
}
logout(){
  this.userdata={};  
  localStorage.setItem("userdata","{}");
  // localStorage.clear();
  this.router.navigate(["/auth"]);
  
}
}