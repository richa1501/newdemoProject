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
      icon:'dashboard',
      label:'Dashboard'
      
    },
    {
      routerLink:'post',
      icon:'table_view',
      label:'Post'
    },
    {
      routerLink:'profile',
      icon:'supervised_user_circle',
      label:'Profile'
    },
  
    {
      routerLink:'/public/aboutus',
      icon:'information',
      label:'About'
    },
    {
      routerLink:'/public/contactus',
      icon:'contacts',
      label:'Contact-Us'
    },
  ]

closeSideNav(){
  this.collapsed = false;
}

}
