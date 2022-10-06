import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  
  {path:'**',
  redirectTo:"/admin/dashboard",
  pathMatch:"full"},

  {  
  path: 'dashboard',
component:DashboardComponent,
children:[
  {
    path: 'profile',
  component:ProfileComponent
  },
  {
    path: 'post',
  component:PostComponent
  }

]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
