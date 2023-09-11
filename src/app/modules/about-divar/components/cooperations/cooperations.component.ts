import { Component } from '@angular/core';

@Component({
  selector: 'app-cooperations',
  templateUrl: './cooperations.component.html',
  styleUrls: ['./cooperations.component.scss']
})
export class CooperationsComponent {
  cooperationList = [
    {
      title: "کارنامه",
      padding: "l-c:pl-[0.5rem] l-c:pr-[20px]",
      image: "assets/images/carnameh.svg",
      description: "کارنامه با هدف خلق تجربه کاربری بهتر در خرید و فروش خودرو و به عنوان یک سرویس مکمل دیوار، با ارائه سرویس‌های کارشناسی خودرو در محل و فروش سفارشی آغاز به کار کرد."
    },
    {
      title: "پیشگامان",
      padding: "l-c:pr-[0.5rem] l-c:pl-[21px]",
      image: "assets/images/pishgaman.svg",
      description: "پیشگامان، به‌عنوان یک شرکت مستقل در کنار دیوار همکاری می‌کند و به‌نوعی بازوی اصلی پشتیبانی و ارتباط نزدیک با کاربران محسوب می‌شود."
    }
  ]
}


