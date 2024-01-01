import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-divar-for-stores',
  templateUrl: './divar-for-stores.component.html',
  styleUrls: ['./divar-for-stores.component.scss']
})
export class DivarForStoresComponent {
  optionList = [
    {
      title: "فروشگاه شما در دیوار",
      description: "فعالیت حرفه‌ای در بازار آنلاین",
      image: "your-store",
      link: "https://sell.divar.ir"
    },
    {
      title: "آژانس املاک شما در دیوار",
      description: "امکانات تخصصی برای مدیران و مشاوران",
      image: "real-state",
      link: "https://real-estate.divar.ir/intro"
    }, {
      title: "نمایشگاه اتومبیل شما در دیوار",
      description: "فعالیت حرفه‌ای در بازار آنلاین خودرو",
      image: "car-exhibit",
      link: "https://divar.ir/car/dealers/intro"
    }
  ]

  constructor(private titleService: Title) {
    titleService.setTitle("صفحه دیوار برای کسب‌وکارها");
  }
}
