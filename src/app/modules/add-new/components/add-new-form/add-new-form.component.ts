import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GlobalValueService} from "../../../../services/global-value.service";
import {ServerService} from "../../../../services/server.service";
import {Title} from "@angular/platform-browser";
import {NavbarService} from "../../../../services/navbar.service";
import {LoginService} from "../../../../services/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-new-form',
  templateUrl: './add-new-form.component.html',
  styleUrls: ['./add-new-form.component.scss']
})
export class AddNewFormComponent {
  addNewFormName: {     text: string;     form: string; } | {     text: string;     form?: undefined; };
  cityOption: {city: string}[] = [];
  addNewFormGroup: FormGroup;
  forms = {
    "rent-apartment": {
      size: {
        value: "",
        valid: false
      },
      deposit: {
        value: "",
        valid: false
      },
      monthlyRent: {
        value: "",
        valid: false
      },
      canChangeDepositMonthlyRent: {
        value: false,
        valid: true
      },
      changedDeposit: {
        value: "",
        relatedTo: "canChangeDepositMonthlyRent",
        valid: false
      },
      changedMonthlyRent: {
        value: "",
        relatedTo: "canChangeDepositMonthlyRent",
        valid: false
      },
      sender: {
        value: "شخصی",
        valid: true
      },
      goodFor: {
        value: "انتخاب کنید",
        valid: false,
      },
      roomCount: {
        value: "انتخاب کنید",
        valid: false
      },
      yearOfConstruction: {
        value: "انتخاب کنید",
        valid: false
      },
      floor: {
        value: "انتخاب کنید",
        valid: false
      },
      elevator: {
        value: "انتخاب کنید",
        valid: false
      },
      parking: {
        value: "انتخاب کنید",
        valid: false
      },
      wareHouse: {
        value: "انتخاب کنید",
        valid: false
      }
    }
  }
  optionOpac = false
  selectedCity = "انتخاب شهر..."
  selectedNeighbor = "انتخاب محله..."
  opens = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]
  selectedPersonType = 'ایرانی'
  filesList:{file: File}[] = []
  fileError = false
  neighborOption: {text: string}[] = []
  yearOfInstructionList = [
      {text: "۱۴۰۲"},
      {text: "۱۴۰۱"},
      {text: "۱۴۰۰"},
      {text: "۱۳۹۹"},
      {text: "۱۳۹۸"},
      {text: "۱۳۹۷"},
      {text: "۱۳۹۶"},
      {text: "۱۳۹۵"},
      {text: "۱۳۹۴"},
      {text: "۱۳۹۳"},
      {text: "۱۳۹۲"},
      {text: "۱۳۹۱"},
      {text: "۱۳۹۰"},
      {text: "۱۳۸۹"},
      {text: "۱۳۸۸"},
      {text: "۱۳۸۷"},
      {text: "۱۳۸۶"},
      {text: "۱۳۸۵"},
      {text: "۱۳۸۴"},
      {text: "۱۳۸۳"},
      {text: "۱۳۸۲"},
      {text: "۱۳۸۱"},
      {text: "۱۳۸۰"},
      {text: "۱۳۷۹"},
      {text: "۱۳۷۸"},
      {text: "۱۳۷۷"},
      {text: "۱۳۷۶"},
      {text: "۱۳۷۵"},
      {text: "۱۳۷۴"},
      {text: "۱۳۷۳"},
      {text: "۱۳۷۲"},
      {text: "۱۳۷۱"},
      {text: "قبل از ۱۳۷۰"},
  ]
  floorList = [
    {text: "زیرهمکف"},
    {text: "همکف"},
    {text: "۱"},
    {text: "۲"},
    {text: "۳"},
    {text: "۴"},
    {text: "۵"},
    {text: "۶"},
    {text: "۷"},
    {text: "۸"},
    {text: "۹"},
    {text: "۱۱"},
    {text: "۱۲"},
    {text: "۱۳"},
    {text: "۱۴"},
    {text: "۱۵"},
    {text: "۱۶"},
    {text: "۱۷"},
    {text: "۱۸"},
    {text: "۱۹"},
    {text: "۲۰"},
    {text: "۲۱"},
    {text: "۲۲"},
    {text: "۲۳"},
    {text: "۲۴"},
    {text: "۲۵"},
    {text: "۲۶"},
    {text: "۲۷"},
    {text: "۲۸"},
    {text: "۲۹"},
    {text: "۳۰"},
    {text: "بالاتر از ۳۰"},
  ]

  constructor(private globalValue: GlobalValueService,public readonly loginService:LoginService,private titleService: Title, private navbar: NavbarService, public readonly activatedRoute: ActivatedRoute, private server: ServerService) {
    this.addNewFormGroup = new FormGroup({
      nationalCode: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/g)]),
      title: new FormControl('', [Validators.required]),
      adDescription: new FormControl('', [Validators.required]),
      showPhoneNumber: new FormControl(false)
    })
    server.availableCitiesInPersian.forEach(city => {
      this.cityOption.push({city: city})
    });
    this.addNewFormName = server.returnNameOfCategory(activatedRoute.snapshot.params["id"], activatedRoute.snapshot.params["id2"], activatedRoute.snapshot.params["id3"]);
  }

  exit() {
    console.log(this.opens)
    this.optionOpac = false;
    setTimeout(() => {
      this.opens = this.opens.map(item => false);
      document.body.style.paddingRight = "";
      this.navbar.marginRight = false;
      document.body.classList.remove("overflow-hidden");
    },240);
  }

  openOption(which :number) {
    this.opens[which] = true;
    setTimeout(() => {
      this.optionOpac = true;
      document.body.classList.add("overflow-hidden");
      this.navbar.marginRight = true;
      document.body.style.paddingRight = "16px";
    },100);
  }

  selectCity(option: string, which = "") {
    switch (which) {
      case "":
        this.selectedCity = option;
        this.neighborOption = this.server.returnNeighbors(this.selectedCity);
        console.log(this.server.returnNeighbors(this.selectedCity))
        this.exit();
        break;
      case "ne":
        this.selectedNeighbor = option;
        this.exit();
        break;
      case "person-type":
        this.selectedPersonType = option;
        this.exit();
        break;
    }
  }

  handelFile(input: HTMLInputElement) {
    // @ts-ignore
    let file = input.files[0]
    if(file.size < 500000 ) {
      this.filesList.push({file: file})
    } else {
      this.fileError = true;
    }
  }

  addAd() {
    console.log(this.forms['rent-apartment'])
  }

  protected readonly parseInt = parseInt;

  openModel(model:HTMLDivElement) {
    model.classList.remove("hidden");
    model.classList.add("opacity-0");
    this.globalValue.modelOpen = true;
    document.body.classList.add("overflow-hidden")
    setTimeout(() => {
      model.classList.remove("opacity-0");
      model.classList.add("opacity-100");
      model.classList.add("translate-x-[0_!important]");
    },200);
  }


  closeModel(model:HTMLDivElement) {
    model.classList.remove("opacity-100");
    model.classList.add("opacity-0");
    model.classList.remove("translate-x-[0_!important]");
    setTimeout(() => {
    document.body.classList.remove("overflow-hidden")
      model.classList.add("hidden");
      this.globalValue.modelOpen = true;
    }, 500)
  }

}
