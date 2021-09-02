import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  cartModalShow : boolean = false;
  tempForm: any;
  detailForm = new FormGroup({
    hours: new FormControl(''),
    date: new FormControl('', [Validators.required]),
    slot_data: new FormControl(''),
    guest_number: new FormControl('', [Validators.required]),
    job_detail: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
    // this.initializeDetailForm();
  }
  // initializeDetailForm(){
  //   this.detailForm = new FormGroup({
  //     date: new FormControl('', [Validators.required]),
  //     guest_number: new FormControl('', [Validators.required]),
  //     job_detail: new FormControl('', [Validators.required]),
  //     zipcode: new FormControl('', [Validators.required]),
  //     phone: new FormControl('', [Validators.required])
  //   });
  // }
  onSubmit(){
    console.log("herere");
    console.log(this.detailForm.value);
    this.tempForm = this.detailForm.getRawValue();
    console.log(this.tempForm);
    this.cartModalShow = true;
  }
}
