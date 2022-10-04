import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder,FormGroup } from '@angular/forms';
import { Auth_Service } from '../../services/auth.service';
import { emailValidator,passwordValidator } from '../../customeValidation';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
 
  user: SocialUser | undefined;
  

  loginForm = this.formBuilder.group({    
    email: new FormControl('', [
      Validators.required,
      emailValidator,
    ]),
    password: new FormControl('', [
      Validators.required,passwordValidator      
    ]),
    role: new FormControl ('',[Validators.required])   
  });

  
  roles: string[] = [];

  constructor(
    private auth_Service: Auth_Service,
    private router: Router,    
    private socialAuthService: SocialAuthService,
    private formBuilder: FormBuilder,
    private toastr : ToastrService,
  ) 
  {
    // this.roles = ['User', 'Admin'];
   
  }
  ////login with normal login 
  logIn() {

    let body = {
      username: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
      roles:this.loginForm.controls.role.value    
      
    }

    let userdata = this.roles.values;
    this.auth_Service.logIn(body).subscribe({
      next: (response: any) => {

        let x = localStorage.getItem("userdata") as string;
        let y = JSON.parse(x);
        y.role = userdata;
        localStorage.setItem("userdata", JSON.stringify(y));
        this.router.navigateByUrl('/admin/dashboard');
      },
      error: (error: any) => {
       
          this.toastr.error('Something Went wrong please try again');
       
      },  
    });
   
  }

   ////Social Login  
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user: any) => {
      user.role="admin";     
      localStorage.setItem('user',JSON.stringify(user));
      this.toastr.success ('You Have created account Successfuly please Login to continue');
      this.router.navigateByUrl('admin/dashboard')});
  }


  logOut(): void {
    this.socialAuthService.signOut();
  }
  
}
