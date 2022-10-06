import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent  {
  @Input() sideNavStatus : boolean=false;
  data: any;
  collapsed: boolean = true;
  navData = [
    {
      routerLink:'/admin/dashboard',
      icon:'DashBoard',
      label:'Dashboard'
      
    },
    {
      routerLink:'post',
      icon:'table',
      label:'Post'
    },
    {
      // routerLink:'dashboard',
      icon:'',
      label:'Profile'
    },
    {
      // routerLink:'dashboard',
      icon:'home',
      label:'Pages'
    },
    {
      // routerLink:'dashboard',
      icon:'home',
      label:'Home'
    }
  ]

closeSideNav(){
  this.collapsed = false;
}

}
