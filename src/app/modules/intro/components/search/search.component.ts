import { Component } from '@angular/core';
import {ServerService} from "../../../../services/server.service";
import {FormControl, FormGroup} from "@angular/forms";
import {GlobalValueService} from "../../../../services/global-value.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  popularList = [
    {
      href: "tehran",
      text: "تهران"
    }, {
      href: "mashhad",
      text: "مشهد"
    }, {
      href: "karaj",
      text: "کرج"
    }, {
      href: "shiraz",
      text: "شیراز"
    }, {
      href: "esfehan",
      text: "اصفهان"
    }, {
      href: "ahvaz",
      text: "اهواز"
    }, {
      href: "tabriz",
      text: "تبریز"
    }, {
      href: "kermanshah",
      text: "کرمانشاه"
    }, {
      href: "qom",
      text: "قم"
    }, {
      href: "rasht",
      text: "رشت"
    }
  ];
  searchList: string[][] = [];
  formGroup: FormGroup;
  notFound: boolean = false;
  open: boolean = true;

  constructor(private server:ServerService) {
    this.formGroup = new FormGroup({
      search: new FormControl("")
    })
  }

  search() {
    if(this.formGroup.get("search")?.value) {
      this.searchList = [];
      this.notFound = false;
      this.server.availableCities.forEach(city => {
        if(city.slice(0, this.formGroup.get("search")?.value?.length).toLocaleLowerCase() === this.formGroup.get("search")?.value?.toLocaleLowerCase()) {
          this.searchList.push([city, this.server.availableCitiesInPersian[this.server.availableCities.indexOf(city)]])
        }
      })
      this.server.availableCitiesInPersian.forEach(city => {
        if(city.slice(0, this.formGroup.get("search")?.value?.length).toLocaleLowerCase() === this.formGroup.get("search")?.value?.toLocaleLowerCase()) {
          this.searchList.push([this.server.availableCities[this.server.availableCitiesInPersian.indexOf(city)], city])
        }
      })
      if(this.searchList.length === 0) {
        this.searchList = [["NOTFOUND"]]
        this.notFound = true;
      }
    } else {
      this.searchList = [];
    }
  }

  exit() {
    this.open = false;
  }
}
