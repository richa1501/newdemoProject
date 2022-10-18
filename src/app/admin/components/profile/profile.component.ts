import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {

  profileForm = this.formBuilder.group({
    name:[{value:this.auth.userData.name,disabled:false}],
    email: [{value:this.auth.userData.email,disabled:true}],
    role: [{value:this.auth.userData.role,disabled:true}],
    mobileNo:[{value:this.auth.userData.mobileNo,disabled:false},Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
  });
  constructor(

    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,

  ) { }

 /**
  Function to update and save profile data
  */
  update(){
    let storageData:any = localStorage.getItem('userData');
    let modifiedData=JSON.parse(storageData);
    modifiedData.name=this.profileForm.controls.name.value;
    modifiedData.mobileNo=this.profileForm.controls.mobileNo.value;
    localStorage.setItem('userData',JSON.stringify(modifiedData));
    }
  }




