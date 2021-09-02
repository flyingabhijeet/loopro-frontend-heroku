import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) { }
  
  loginSuperAdmin(payload: {email: string, password: string}) {
    return this.http.patch(`${environment.apiUrl}/auth/login`, payload, {observe: 'response'} );
  }

  initiateForgetPassword(payload: {email: string}) {
    return this.http.patch(`${environment.apiUrl}/auth/forget-password`, payload);
  }

  verifyForgetPasswordToken(payload: string) {
    return this.http.get(`${environment.apiUrl}/auth/forget-password/${payload}`);
  }

  completeForgetPassword(token: string, payload: {password: string}) {
    return this.http.patch(`${environment.apiUrl}/auth/forget-password/${token}`, payload);
  }
  
  logout(){
    this.accountService.logout();
  }
  
}
