import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ServiceListService } from 'src/app/services/service-list.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})

export class ServiceProviderComponent implements OnInit {
  basicDetails!: FormGroup;
  questionsAndAnswers!: {question: string, answer: any}[];
  step = -1;
  services!: {value: string, title: string}[];

  constructor(private serList:ServiceListService, private router:Router, private toastr: ToastrService) { }
  
  ngOnInit() {
    this.prepareBasicDetailForm();
    this.prepareData();
  }
  
  prepareBasicDetailForm() {
    this.basicDetails = new FormGroup({
      serviceType: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }
  
  prepareData() {
    this.questionsAndAnswers = [
      {
        question: `What Package is Right For You?`,
        answer: `<p>Your answer here</p>`
      },
      {
        question: `What's Included?`,
        answer: ``
      },
      {
        question: `What's Not Included?`,
        answer: ``
      },
      {
        question: `What You Can Expect From Us?`,
        answer: ``
      },
      {
        question: `What We Can Expect From You?`,
        answer: ``
      },
    ];
    this.services = [
      {
        value: `home_cleaning`, 
        title: `Home Cleaning`
      },
      {
        value: `car_driving`, 
        title: `Car Driving`
      },
      {
        value: `shipping`, 
        title: `Shipping`
      },
    ]
  }

  get basic() { 
    return this.basicDetails?.controls; 
  }
  
  goNext() {
    if(this.step === -1) {
      if (this.basicDetails?.invalid) { return  }
          this.step++;
    } else {
      this.questionsAndAnswers?.forEach((a: {question: string, answer: any}, i: number) => {
        if(this.step === i) {
          a.answer.length ? this.step++ : console.log('Please enter data!');
        }
      });
    }
  }
  
  goPrevious() {
    this.step--;
  }
  
  onSubmit() {
    if(this.questionsAndAnswers[this.questionsAndAnswers.length-1].answer.length) {
      let serviceProvider = {
        serviceType: this.basic.serviceType.value,
        title: this.basic.title.value,
        description: this.basic.description.value,
        questionAndAnswers: this.questionsAndAnswers
      };
      console.log('Service provider data', serviceProvider);
      this.serList.addService(serviceProvider)
      .subscribe((res:any)=>{
        console.log(res)
        if(res && res.status===200){
          this.toastr.success(res.massage,'Created',{progressBar:true});
          this.router.navigateByUrl('/admin/servicelist')
        }
      })
    } else {
      return;
    }
  }

  onChangeContent(event: any, i: number) {
    console.log(`Updated answer:`, this.questionsAndAnswers[i].answer);
  }
  
}
