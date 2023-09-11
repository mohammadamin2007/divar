import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GlobalValueService} from "../../../../services/global-value.service";
import {ServerService} from "../../../../services/server.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {NavbarService} from "../../../../services/navbar.service";

@Component({
  selector: 'app-add-new-form',
  templateUrl: './add-new-form.component.html',
  styleUrls: ['./add-new-form.component.scss']
})
export class AddNewFormComponent {
  addNewFormName: {     text: string;     form: string; } | {     text: string;     form?: undefined; };
  sendNew: FormGroup
  cityOption: {city: string}[] = [];
  open = false
  optionOpac = false
  selectedCity = "انتخاب شهر..."
  selectedNeighbor = "انتخاب محله..."
  open2 = false
  open3 = false
  selectedPersonType = 'ایرانی'
  filesList:{file: File}[] = []
  fileError = false

  constructor(private titleService: Title, private navbar: NavbarService, public readonly activatedRoute: ActivatedRoute, private server: ServerService) {
    this.sendNew = new FormGroup({
      city: new FormControl(""),
      Neighbourhood: new FormControl(""),
      personType: new FormControl("")
    })
    server.availableCitiesInPersian.forEach(city => {
      this.cityOption.push({city: city})
    });
    this.addNewFormName = server.returnNameOfCategory(activatedRoute.snapshot.params["id"], activatedRoute.snapshot.params["id2"], activatedRoute.snapshot.params["id3"]);
  }

  exit(which = '') {
    this.optionOpac = false;
    setTimeout(() => {
      this.open = false;
      this.open2 = false;
      this.open3 = false;
      document.body.style.paddingRight = "";
      this.navbar.marginRight = false;
      document.body.classList.remove("overflow-hidden");
    },240);
  }

  openOption(which = "") {
    if(which === "") {
      this.open = true;
    } else if (which === 'ne') {
      this.open2 = true;
    } else {
      this.open3 = true;
    }
    setTimeout(() => {
      this.optionOpac = true;
      document.body.classList.add("overflow-hidden");
      this.navbar.marginRight = true;
      document.body.style.paddingRight = "16px";
    },100);
  }

  selectCity(option: string, which = "") {
    if(which === "") {
      this.selectedCity = option;
      this.exit();
    } else if(which === "ne") {
      this.selectedNeighbor = option;
      this.exit();
    } else {
      this.selectedPersonType = option;
      this.exit();
    }
  }

  handelFile(input: HTMLInputElement) {
    //@ts-ignore
    let file = input.files[0]
    if(file.size < 500000 ) {
      this.filesList.push({file: file})
    } else {
      this.fileError = true;
    }
  }

}
