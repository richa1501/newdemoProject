import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent  {
  data: any;
  collapsed: boolean = true;
  navData = [
    {
      routerLink:'dashboard',
      icon:'home',
      label:'Home'
    }
  ]

closeSideNav(){
  this.collapsed = false;
}

}
