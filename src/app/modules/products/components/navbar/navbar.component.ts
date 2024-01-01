import {Component, ElementRef, ViewChild} from '@angular/core';
import { GlobalValueService } from 'src/app/services/global-value.service';
import { NavbarService } from 'src/app/services/navbar.service';
import {ServerService} from "../../../../services/server.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('closeSearchModel') closeSearchModel: ElementRef
  @ViewChild('searchDropDown') searchDropDown: ElementRef
  @ViewChild('categoryModel') categoryModel: ElementRef
  @ViewChild('closeCategories') closeCategories: ElementRef
  @ViewChild('searchInput') searchInput: ElementRef
  @ViewChild('inputDiv') inputDiv: ElementRef
  userDropDown: boolean = false;
  mostList = [
    {
      text: "خودرو سواری",
      link: ""
    },{
      text: "فروش اپارتمان",
      link: ""
    },{
      text: "اجاره اپارتمان",
      link: ""
    },{
      text: "موبایل",
      link: ""
    },{
      text: "صندلی و نیمکت",
      link: ""
    },{
      text: "حیوانات",
      link: ""
    },{
      text: "وسایل شخصی",
      link: ""
    },{
      text: "خدمات",
      link: ""
    },{
      text: "استخدام",
      link: ""
    },{
      text: "تلوزیون",
      link: ""
    },
  ]
  inputBgWhite: boolean = false
  showRemoveButton: boolean = false
  categoryList:{     text: string;     image: string;     spClass: string;     group: string;     boxHeight: string; }[] = []

  constructor(public navbarService: NavbarService, public globalValue: GlobalValueService, private server: ServerService) {
    this.categoryList = server.addNewDataTitles();
  }

  openModel(model:HTMLDivElement) {
    model.classList.remove("hidden");
    model.classList.add("opacity-0");
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "16px";
    this.navbarService.marginRight = true;
    setTimeout(() => {
      model.classList.remove("opacity-0");
      model.classList.add("opacity-100");
    },200);
  }

  closeModel(model:HTMLDivElement) {
    model.classList.remove("opacity-100");
    model.classList.add("opacity-0");
    setTimeout(() => {
      model.classList.add("hidden");
      document.body.style.overflow = '';
      document.body.style.paddingRight = "";
      this.navbarService.marginRight = false;
    }, 500)
  }

  handelCloseSearch(event: MouseEvent) {
    if(event.target !== this.searchInput.nativeElement) {
      this.closeModel(this.searchDropDown.nativeElement);
      this.closeModel(this.closeSearchModel.nativeElement);
      this.inputBgWhite = false;
      this.searchInput.nativeElement.value = "";
    }
  }

  handelSearchOpen() {
    this.openModel(this.searchDropDown.nativeElement);
    this.openModel(this.closeSearchModel.nativeElement);
    this.inputBgWhite = true;
  }

  handelCategoryClose(event: MouseEvent) {
    this.closeModel(this.categoryModel.nativeElement);
    this.closeModel(this.closeCategories.nativeElement);
  }

  handelCategoryOpen() {
    this.openModel(this.categoryModel.nativeElement);
    this.openModel(this.closeCategories.nativeElement);
  }


  handelSearch() {
    if(this.searchInput.nativeElement.value !== '') {
      this.showRemoveButton = true;
    } else {
      this.showRemoveButton = false;
    }
  }
  protected readonly history = history;
}
