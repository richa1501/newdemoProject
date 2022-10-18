import { Component} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/user';
import { emailValidator, mustMatch, passwordValidator } from '../../customeValidation';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  user: User = new User(); //For social Login

  signupForm = this.formBuilder.group({

    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, emailValidator]), // emailValidator is name of cutomeValidator fuction
    password: new FormControl('', [Validators.required, passwordValidator]), // PasswordValidator is name of cutomeValidator fuction
    cpassword: new FormControl('', [Validators.required, mustMatch]),// mustMatch is name of cutomeValidator fuction to match password & confirmPassword
  });
  userData: any;  // local Storage key name to save Response

  //Dependency Injection
  constructor(
    private formBuilder: FormBuilder,
    private signupservice: SignupService,
    private router: Router,
    private toastr: ToastrService
  ) { }
 /**
  *  SignUp to register user and save in local storage
  */
  signUp() {
    this.signupservice.signUp(this.signupForm.getRawValue()).subscribe({
      next: (response: any) => {
        localStorage.setItem("userData", JSON.stringify(response));
        this.userData = response;
        this.toastr.success('You Have created account Successfuly please Login to continue');
        this.router.navigate(['/auth/login']);
      },
      error: (error: any) => {
        this.toastr.error('Something Went wrong please try again')
      },
    });
  }
}
