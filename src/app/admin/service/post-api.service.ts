import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from 'src/app/shared/configs/api';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http : HttpClient) { }


  postList(){
   return this.http.get("https://reqres.in/api/users");
  }
}
