import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { MaterialModule } from '../material/mateial.module';//Material Module Imported For Material Element
import { SharedModule } from '../shared/shared.module';

//Module Import For Social Login 
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';




@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,   
    MaterialModule,
    SocialLoginModule,
    SharedModule,
  ],

  providers: [  //Social Login crediential and Providers 
  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1016994148249-cvijokf575kprvsj6899n1ms5a213uu4.apps.googleusercontent.com'

          )
        },
    
      ],
      onError: (err) => {
       
      }
    } as SocialAuthServiceConfig,
  }
   
  ],
})
export class AuthModule { }
