import {Injectable, OnChanges, SimpleChanges} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService{
  shouldActivated: string = "none"
  whichLinks: string[] = []

  constructor() { }
}
