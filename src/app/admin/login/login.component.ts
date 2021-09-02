import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/auth/account.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageservicesService } from 'src/app/services/storage-services/storageservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  module = 'Admin';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(`${this.module} module: Login component!`);
  }

  onLogin() {
    if(this.loginForm.valid) {
      this.authService.loginSuperAdmin(this.loginForm.value).subscribe((response: HttpResponse<Object>) => {
        this.accountService.configureUser(response);
        this.router.navigate(['admin', 'services'])
        console.log(response);
      }, (err) => {
        console.log('Error occurred while logging in:-', err);
        console.log(err.error.message);
        this.toastr.error(err.error.message);
      });
    }
  }
}
