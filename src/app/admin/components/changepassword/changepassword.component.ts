import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { mustMatch, passwordValidator } from 'src/app/auth/customeValidation';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordServiceService } from 'src/app/auth/services/changepassword.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent  {
  changePasswordForm = this.formbuilder.group({



    password: new FormControl('', [Validators.required, passwordValidator ]),

    cpassword: new FormControl('', [Validators.required,mustMatch])

  });





  constructor(private formbuilder : FormBuilder,  private router: Router,private auth: AuthService, private toastr : ToastrService,private changepassword : ChangePasswordServiceService) { }
  access_token=this.auth.userData.access_token;
  headers = new HttpHeaders({
 'Content-Type': 'application/json',
 'Authorization': `Bearer ${this.access_token}`
});

requestOptions = { headers: this.headers };

submit(){
//   this.changepassword.changePass(this.changePasswordForm.getRawValue(),this.requestOptions).subscribe({
//   next: () => {
//     this.router.navigate(['/auth/login']);
//     this.toastr.show('Password Changed!!','Please Login Again');
//   },
//   error: (response: { error: { message: any; }; }) => {
//     this.toastr.error('',response.error.message);
//   }
// })

}

}