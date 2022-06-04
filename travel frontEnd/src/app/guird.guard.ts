import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GetdataService } from 'src/app/serveces/getdata.service';
GetdataService
@Injectable({
  providedIn: 'root'
})
export class GuirdGuard implements CanActivate {
  constructor(public _GetdataService:GetdataService, public _Router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(null){
        return true
      }else{
        alert("you have to login befor")
        return false
      }  }

}
