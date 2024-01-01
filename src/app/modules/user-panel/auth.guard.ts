import {Injectable} from "@angular/core"
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../../services/login.service";


@Injectable() export
class AuthGuard implements CanActivate{
  constructor(private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.loggedIn
  }
}
