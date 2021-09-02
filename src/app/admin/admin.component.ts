import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  title = 'frontend';
    showHeader: boolean = true;
    showFooter: boolean = true;
    sidebar: boolean = true;
    constructor(private router: Router) {
      this.router.events.subscribe((event: Event) => {
          if (event instanceof NavigationEnd) {
            let url = event.url as string;
            if(url.includes('login') || url.includes('forget-password')) {
              this.showHeader = false;
              this.showFooter = false;
              this.sidebar = false;
            } else {
              this.showHeader = true;
              this.showFooter = true;
              this.sidebar = true;
            }
          }
      });
  }
  ngOnInit(): void {} 
}