import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
    { 
        path: '', 
        component: AdminComponent, 
        children: [
            { path: '', redirectTo: 'login' },
            { path: 'login', component: LoginComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'service-provider', component: ServiceProviderComponent },
        ] 
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
