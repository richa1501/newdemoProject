
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../public/component/aboutus/aboutus.component';
import { DashboardUiComponent } from './components/dashboard-ui/dashboard-ui.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
    {  
  path: 'dashboard',
component:DashboardUiComponent,
children:[
  {
    path: 'home',
  component:DashboardComponent,
  data: {
    title: 'Dashboard',
    breadcrumb: [
      {
        label: 'Dashboard',
        url: '/admin/dashboard/home'
      }
    ]
  },
  
  },
  {
    path: 'post',
  component:PostComponent,
  data: {
    title: 'Post',
    breadcrumb: [
      {
        label: 'Dashboard',
        url: '/admin/dashboard/home'
      },
      {
        label: 'Post',
        url: ''
      }
    ]
  },
  },
  {
    path: 'profile',
  component:ProfileComponent,
  data: {
    title: 'Profile',
    breadcrumb: [
      {
        label: 'Dashboard',
        url: '/admin/dashboard/home'
      },
      {
        label: 'post',
        url: '/admin/dashboard/post'
      },
      {
        label: 'Profile',
        url: ''
      }
    ]
  },
  },
 
  {
    path: 'aboutus',
  component:AboutusComponent
  },

]},
{path:'**',
  redirectTo:"/admin/dashboard/home",
  pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
