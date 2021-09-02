import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ServicesComponent } from './services/services.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServiceListComponent } from './service-provider/service-list/service-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ServicesComponent,
    ServiceProviderComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ServiceListComponent
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
