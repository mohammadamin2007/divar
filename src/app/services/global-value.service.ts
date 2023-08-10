import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalValueService {
  showNavbar: boolean = false
  constructor() { }
}
