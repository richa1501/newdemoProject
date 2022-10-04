import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss']
})
export class AdminheaderComponent  {
// sidenav: any;
//   @Output() toggleSidebarForMe : EventEmitter<any> =new EventEmitter();
//   constructor() { }
//   toggleSideBar(){
//     this.toggleSidebarForMe.emit();

//   }
@Output()  sideNavToggled = new EventEmitter<boolean>();
  
menuStatus : boolean = false;

sideNavToggle(){
  this.menuStatus = !this.menuStatus;
  this.sideNavToggled.emit(this.menuStatus);
}

}
