import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http : HttpClient) { }

 /** To fatch data */
  getPostList(){
   return this.http.get<any>("http://localhost:3000/posts");
  }
   /**
    To add new record
    */
  addpostData(data:any){
    return this.http.post<any>("http://localhost:3000/posts/",data);
  }
   /**
    To update exiting record
    */
  editpostData(data:any,id:number){
    return this.http.put("http://localhost:3000/posts/"+id,data);
  }
   /**
    To delete a particular record
    */
  deletepostData(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id);
  }
}

