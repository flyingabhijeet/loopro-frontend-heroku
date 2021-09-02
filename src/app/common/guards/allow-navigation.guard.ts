import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AccountService } from "src/app/services/auth/account.service";

@Injectable({
    providedIn: 'root'
})

export class AllowNavigationGuard implements CanActivate {

    constructor(
        private router: Router,
        private accountService: AccountService,
    ) {}
    
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let allowNavigation;
        this.accountService.getToken() ? allowNavigation = false : allowNavigation = true;
        !allowNavigation ? this.router.navigate(['admin', 'services']) : '';
        return allowNavigation;
    }
}