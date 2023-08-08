import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginStatusService } from '../Services/login-status.service';
import { LoginUserService } from '../Services/login-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate/* , CanActivateChild, CanDeactivate<unknown>, CanLoad, CanMatch */ {
  constructor(private auth:LoginUserService,private route:Router,private logoutAuth:LoginStatusService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isLoggedIn()){
      return true;
    }
    else{
      this.route.navigate(['/register'])
      return false
    }
  }
 /*  /* canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } */
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.logoutAuth.isLoggedOut())
    {
      alert('1')
      return true;  
    }
    else if(this.auth.isLoggedIn || this.logoutAuth.isLoggedOut()){
      alert('2')
       return true
    }
    else{
      alert('3')
      return true
    }
  }
  /* canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } */ 
}
