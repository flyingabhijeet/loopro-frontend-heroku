import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  stage: string = '';
  forgetPasswordForm!: FormGroup;
  completeForgetPasswordForm!: FormGroup;
  token!: string; 
  
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.token = this.route.snapshot.params['token'];
    !this.token ? this.stage = 'initial' : ''; 
    this.stage != 'initial' ? this.verifyToken(this.token) : '';
    this.initializeForm();
  }

  
  initializeForm() {
    if(this.stage === 'initial') {
      this.forgetPasswordForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
      });
    } else if(this.stage = 'final') {
      this.completeForgetPasswordForm = new FormGroup({
        newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required])
      });
    }
  }
  
  
  onGeneratePasswordResetLink() {
    if(this.forgetPasswordForm.valid) {
      this.spinner.show();
      const payload = this.forgetPasswordForm.value;
      this.authService.initiateForgetPassword(payload).subscribe((response: any) => {
        this.spinner.hide();
        this.toastr.success(response.message);
        this.forgetPasswordForm.reset();
      });
    }
  }

  verifyToken(token: string) {
    this.spinner.show();
    this.authService.verifyForgetPasswordToken(token).subscribe((response: Object) => {
      this.stage = 'final';
      this.spinner.hide();
    }, (err) => {
      console.log('Error occurred while verifying token:-', err);
      console.log(err.error.message);
      this.spinner.hide();
      this.router.navigate(['admin', 'login']);
      this.toastr.error(err.error.message);
    })
  }

  onCompleteForgetPasswordProcess(): any {
    if(this.completeForgetPasswordForm.valid) {
      let payload = this.completeForgetPasswordForm.value;
      if(payload.newPassword !== payload.confirmPassword)
      return this.toastr.error('Passwords not matched!');
      payload = {password: payload.newPassword};
      console.log('final payload', payload);
      this.authService.completeForgetPassword(this.token, payload).subscribe((response: any) => {
        console.log(response);
        this.toastr.success(response.message);
        this.completeForgetPasswordForm.reset();
        this.router.navigate(['admin', 'login']);
      });
    }
  }

}
