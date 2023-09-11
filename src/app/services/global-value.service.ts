import {AfterViewInit, Injectable} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RoutesRecognized
} from "@angular/router";
import {filter, pairwise} from "rxjs";
import pathNames from "../pathNames";

@Injectable({
  providedIn: 'root'
})
export class GlobalValueService  {
  showNavbar: boolean = false;
  previousRoute = "";
  navbarName  = "";
  currentRoute = "";
  newDataIsLoading: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(item => {
      if(item instanceof NavigationEnd){
        this.currentRoute = item.url.indexOf("?") !== -1? item.url.slice(0, item.url.indexOf("?")): item.url;
      }
      this.router.events
        .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
        .subscribe((events: RoutesRecognized[]) => {
          this.previousRoute =  events[0].urlAfterRedirects;
        });
    })
  }

  getPreviousRoute() {
    return this.previousRoute;
  }

}
