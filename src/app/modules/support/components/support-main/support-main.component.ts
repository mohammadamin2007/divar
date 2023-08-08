import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalValueService } from 'src/app/services/global-value.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-support-main',
  templateUrl: './support-main.component.html',
  styleUrls: ['./support-main.component.scss']
})
export class SupportMainComponent {
  title = "مرکز پشتیبانی دیوار"
  formGroup: FormGroup;

  constructor(private navbarService: NavbarService, private globalValue: GlobalValueService) {
    this.globalValue.showNavbar = true;
    this.formGroup = new FormGroup({
      search: new FormControl("")
    })
    console.log(this.formGroup.get("search"))
    setTimeout(() => {
      this.navbarService.shouldActivated = 'posht';
    }, 500)
    //@ts-ignore
    document.querySelector("title").textContent = this.title;
  }

  search() {
    console.log(this.formGroup.get("search")?.value)
  }
}
