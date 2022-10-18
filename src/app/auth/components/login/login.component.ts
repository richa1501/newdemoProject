import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { emailValidator, passwordValidator } from '../../customeValidation';
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

    email: new FormControl('', [Validators.required, emailValidator,]),

    password: new FormControl('', [Validators.required, passwordValidator ]),

    role: new FormControl('', [Validators.required])

  });
  userData: any; // local Storage key name to save Response

  //All Dependecy Import in Constructor
  constructor(

    private auth: AuthService,
    private router: Router,
    private socialAuthService: SocialAuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,

  ) { }

  /**
   To login and save data in local storage
   */
  logIn() {

    let body = {
      username: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    }

    this.auth.logIn(body).subscribe({
      next: (response: any) => {
        response.role = this.loginForm.controls.role.value;
        localStorage.setItem("userData", JSON.stringify(response));
        this.userData = response;
        this.router.navigateByUrl('/admin/dashboard/home');
        this.toastr.success(response.name, 'Login Successfully!! Welcome ');
      },
      error: (error: any) => {

        this.toastr.error('Something Went wrong please try again');

      },
    })
  }

 /**
  Function for social login
  */
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user: any) => {
      user.role = "admin";
      localStorage.setItem('user', JSON.stringify(user));
      this.toastr.success('You Have created account Successfuly please Login to continue');
      this.router.navigateByUrl('admin/dashboard/home')
    });
  }

 /**
  Function for Logout
  */
  logOut(): void {
    this.socialAuthService.signOut();
  }

}
