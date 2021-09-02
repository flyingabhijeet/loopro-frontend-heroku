import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageservicesService } from '../storage-services/storageservices.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private storageService: StorageservicesService,
    private router: Router
  ) { }

  configureUser(response: HttpResponse<Object>) {
    const authToken = response.headers.get('x-auth')
    this.storageService.setItem('token', authToken);
  }

  getToken(): boolean {
    return !!this.storageService.getItem("token");
  }
  
  logout() {
    this.storageService.clear();
    this.router.navigate(['admin', 'login']);
  }
  
}
