import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private router:Router){

  }

  canActivate():  boolean {
    const productStorage = sessionStorage.getItem('product');
    if (productStorage){
        return true;
    }
    this.router.navigateByUrl('/login');
    return false;   
  }
  
}
