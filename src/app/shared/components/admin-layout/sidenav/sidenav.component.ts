import { Component, Input, OnInit } from '@angular/core';

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
      // routerLink:'dashboard',
      icon:'home',
      label:'Home'
    },
    {
      // routerLink:'dashboard',
      icon:'home',
      label:'Home'
    },
    {
      // routerLink:'dashboard',
      icon:'home',
      label:'Home'
    },
    {
      // routerLink:'dashboard',
      icon:'home',
      label:'Home'
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
