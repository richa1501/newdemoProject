import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent  {
  http: any;
  toastr: any;

  constructor(private httpClient : HttpClient) { }
//To DO 
submit(){

}
}
