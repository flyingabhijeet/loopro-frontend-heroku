import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  constructor(private http:HttpClient) { }

  addService(data:any){
    return this.http.post(`${environment.apiUrl}/service`,data);
  }

  getService(){
    return this.http.get(`${environment.apiUrl}/service`);
  }
  deleteSercie(id:any){
    console.log(id)
    return this.http.delete(`${environment.apiUrl}/service/${id}`);
  }
  editSercie(id:any,data:any){
    return this.http.put(`${environment.apiUrl}/service/${id}`,data);
  }
}
