import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/mateial.module';
import { PublicModule } from '../public/public.module';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout/admin-layout.component';
import { HeaderComponent } from './components/auth-layout/header/header.component';
import { FooterComponent } from './components/auth-layout/footer/footer.component';
import { AdminheaderComponent } from './components/admin-layout/adminheader/adminheader.component';
import { SidenavComponent } from './components/admin-layout/sidenav/sidenav.component';







@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent,
    FooterComponent,
    AdminheaderComponent,
    SidenavComponent,

  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, PublicModule, RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,   
    AdminLayoutComponent,
    HeaderComponent,
    FooterComponent,
    AdminheaderComponent,
    SidenavComponent
  ]
})
export class SharedModule { }