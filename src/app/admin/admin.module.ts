import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ServicesComponent } from './services/services.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ServicesComponent,
    ServiceProviderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class AdminModule { }
