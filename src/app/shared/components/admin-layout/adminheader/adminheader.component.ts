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
@Output()  sidenavToggled = new EventEmitter<boolean>();
  
menuStatus : boolean = false;

sidenavToggle(){
  this.menuStatus = !this.menuStatus;
  this.sidenavToggled.emit(this.menuStatus);
}

}
