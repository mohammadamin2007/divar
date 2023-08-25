import { Component } from '@angular/core';

@Component({
  selector: 'app-major-support',
  templateUrl: './major-support.component.html',
  styleUrls: ['./major-support.component.scss']
})
export class MajorSupportComponent {
  majorList = [
    {
      title: "شرایط و قوانین کلی استفاده از دیوار",
      description: "دریافت خدمات از سایت و اپلیکیشن دیوار در گرو رعایت شرایط و قوانین دیوار است. لطفاً پیش از استفاده از خدمات دیوار، شرایط و قوانین را به صورت کامل و با دقت مطالعه کنید.",
      routerLink: "",
      routerText: "مشاهدهٔ شرایط و قوانین"
    },{
      title: "راهنمای خرید امن",
      description: "مطالعهٔ راهنمای خرید امن قبل و هنگام معامله احتمال کلاهبرداری را کاهش می‌دهد. لطفا پیش از انجام هرگونه خرید و فروش، راهنمای خرید امن را با دقت مطالعه کنید.",
      routerLink: "",
      routerText: "مشاهدهٔ راهنمای خرید امن"
    }, {
      title: "انتقادات و پیشنهادات",
      description: "به منظور بهبود تجربهٔ کاربری و خدمات دیوار و همچنین افزایش رضایت کاربران، خوشحال می‌شویم با ارسال انتقادات و پیشنهادهای خود، ما را در بهبود کیفیت ارائهٔ خدمات یاری نمائید.",
      routerLink: "",
      routerText: "ثبت انتقاد و پیشنهاد",
    }
  ]
}
