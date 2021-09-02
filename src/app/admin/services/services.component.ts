import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceData:any;
  services!: {id: string, title: string, description: string}[];
  
  constructor() { }

  ngOnInit(): void {
    this.prepareServicesData();
  }

  prepareServicesData() {
    this.services = [
      {
        id: '1',
        title: 'Home Cleaning',
        description: 'This service relates to home cleaning activies'
      }
    ]
  }

}
