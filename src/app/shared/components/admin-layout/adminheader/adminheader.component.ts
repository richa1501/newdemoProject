import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss']
})
export class AdminheaderComponent  {
sidenav: any;
  @Output() toggleSidebarForMe : EventEmitter<any> =new EventEmitter();
  constructor() { }
  toggleSideBar(){
    this.toggleSidebarForMe.emit();

  }
}
