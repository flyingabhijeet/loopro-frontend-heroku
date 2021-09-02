import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllowNavigationGuard } from '../common/guards/allow-navigation.guard';
import { AuthGuard } from '../common/guards/auth.guard';
import { AdminComponent } from './admin.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { ServiceListComponent } from './service-provider/service-list/service-list.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
    { 
        path: '', 
        component: AdminComponent, 
        children: [
            { path: '', redirectTo: 'login' },
            { path: 'login', canActivate: [AllowNavigationGuard], component: LoginComponent },
            { path: 'forget-password', canActivate: [AllowNavigationGuard], component: ForgetPasswordComponent },
            { path: 'forget-password/:token', canActivate: [AllowNavigationGuard],  component: ForgetPasswordComponent },
            { path: 'services', canActivate: [AuthGuard], component: ServicesComponent },
            { path: 'service-provider', canActivate: [AuthGuard], component: ServiceProviderComponent },
            { path: 'servicelist', canActivate: [AuthGuard], component: ServiceListComponent }

        ] 
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
