import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ServiceListService } from 'src/app/services/service-list.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  serviceData:any;

  constructor(private router:Router, private serList:ServiceListService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadInit()
  }

  loadInit(){
    this.serList.getService()
    .subscribe((res:any)=>{
      console.log(res)
      if(res && res.status===200){
        this.serviceData = res.data;
      }
      console.log(this.serviceData[0])

    })

  }

  addService(){
    this.router.navigateByUrl('/admin/service-provider')
  }

  editService(id:any){
    console.log('you hit edit button',id)
  }

  deleteService(id:any){
    const status=200;
    this.serList.deleteSercie(id)
    .subscribe((res:any)=>{
      if(res && res.status === status){
        this.toastr.success(res.message,'Sucess',{progressBar:true})
      }else{
        this.toastr.error(res.message,'Failed',{progressBar:true})        
      }

    })
  }

}
