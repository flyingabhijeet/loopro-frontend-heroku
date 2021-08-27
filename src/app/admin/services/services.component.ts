import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services!: {id: string, title: string}[];
  
  constructor() { }

  ngOnInit(): void {
    this.prepareServicesData();
  }

  prepareServicesData() {
    this.services = [
      {
        id: '1',
        title: 'Home Cleaning'
      },
      {
        id: '2',
        title: 'Car Driving'
      },
      {
        id: '3',
        title: 'Shipping'
      },
    ]
  }

}
