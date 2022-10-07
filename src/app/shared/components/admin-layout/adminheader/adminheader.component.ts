import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss']
})
export class AdminheaderComponent  {
[x: string]: any;
// sidenav: any;
//   @Output() toggleSidebarForMe : EventEmitter<any> =new EventEmitter();
//
//   toggleSideBar(){
//     this.toggleSidebarForMe.emit();

//   }

constructor(private router : Router) { }


@Output()  sidenavToggled = new EventEmitter<boolean>();
  
menuStatus : boolean = false;

sidenavToggle(){
  this.menuStatus = !this.menuStatus;
  this.sidenavToggled.emit(this.menuStatus);
}


logout(){
  this['userdata']={};  
  // localStorage.setItem("userdata","{}");
  localStorage.clear();
  // localStorage.clear();
  this['router'].navigateByUrl("/auth/login");
  
}
}