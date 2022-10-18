import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from 'src/app/shared/configs/api';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http : HttpClient) { }


  getPostList(){
   return this.http.get<any>("http://localhost:3000/posts/");
  }
  addpostData(data:any){
    return this.http.post<any>("http://localhost:3000/posts/",data);
  }
  editpostData(data:any,id:number){
    return this.http.put("http://localhost:3000/posts/"+id,data);
  }
  deletepostData(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id);
  }
}

