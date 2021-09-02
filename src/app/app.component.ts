import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
    showHeader: boolean = true;
    showFooter: boolean = true;
    constructor(private router: Router) {
      this.router.events.subscribe((event: Event) => {
          if (event instanceof NavigationEnd) {
            let url = event.url as string;
            if(url.includes('admin')) {
              this.showHeader = false;
              this.showFooter = false;
            }
          }
      });
  }
}
