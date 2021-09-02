import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public pages = '';
  public activeMenu:string = '';
  public activeSubMenu:string = '';
  public userImage:string = '';
  public userName:string = '';
  constructor() {
  
   
  }

  ngOnInit(): void {
  }
}
