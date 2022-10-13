import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { MaterialModule } from '../material/mateial.module';







@NgModule({
  declarations: [

    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule ,MaterialModule]
})
export class PublicModule { }
