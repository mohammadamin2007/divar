import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-support-main',
  templateUrl: './support-main.component.html',
  styleUrls: ['./support-main.component.scss']
})
export class SupportMainComponent {
  title = "مرکز پشتیبانی دیوار"
  supportList = [
    {
      title: "ورود و حساب کاربری",
      categoryName: "categoy-account",
      categoryHelp: [
        {
          title: "چگونه در «دیوار» حساب کاربری بسازم؟",
          body: "روی گزینهٔ «دیوار من» کلیک کنید. گزینه‌ٔ «ورود به حساب» را انتخاب کرده و شمارهٔ تماس خود را وارد کنید. برای اطمینان از صحیح بودن شمارهٔ موبایل وارد شده، کد تأیید برای شما ارسال می‌شود و پس از وارد کردن کد، ساخت حساب‌ کاربری شما تکمیل می‌شود.برای استفاده از تمام امکانات و ثبت آگهی باید یک حساب کاربری در دیوار بسازید. ساخت حساب کاربری در دیوار به راحتی و با وارد کردن شمارهٔ موبایل امکان‌پذیر است. برای ساخت حساب کاربری کافی است روی گزینهٔ «دیوار من» کلیک کنید و سپس مراحل زیر را طی کنید:نکته اگر دیوار را نصب نکردید از <اینجا> نصب کنید.",
          helps: [
            {type: "website", body: [
              {text: "در وب‌سایت دیوار و از منوی بالا، روی گزینهٔ «دیوار من» کلیک کنید."},
              {text: "از منوی باز شده روی گزینهٔ «ورود» کلیک کنید."},
              {text: "شمارهٔ موبایل خود را وارد کرده و سپس روی گزینهٔ «تأیید» کلیک کنید."},
              {text: "پس از وارد کردن شماره‌ موبایل، «کد تأیید» از طریق پیامک برای شما ارسال می‌شود."},
              {text: "کد را در قسمت مشخص شده وارد کنید و گزینهٔ «ورود» را بزنید."},
              {text: "پس از وارد کردن کد تأیید، حساب‌کاربری شما با موفقیت ساخته می‌شود."}
            ], pic: []},
            {type: "android", body: [
              {text: "در اپلیکیشن دیوار و از منوی پایین، روی گزینهٔ «دیوار من» کلیک کنید."},
              {text: "در صفحهٔ دیوار من، روی گزینهٔ  «ورود به حساب» کلیک کنید."},
              {text: "شمارهٔ موبایل خود را وارد و روی گزینهٔ «بعدی» کلیک کنید."},
              {text: "پس از وارد کردن شماره‌ موبایل، «کد تأیید» از طریق پیامک برای شما ارسال می‌شود."},
              {text: "کد را در قسمت مشخص شده وارد کنید و گزینهٔ «ورود» را بزنید."},
              {text: "پس از وارد کردن کد تأیید، حساب‌کاربری شما با موفقیت ساخته می‌شود."}
            ], pic: []},
            {type: "ios", body: [
              {text: "در اپلیکیشن دیوار و از منوی پایین، روی گزینهٔ «دیوار من» کلیک کنید."},
              {text: "در صفحهٔ دیوار من، روی گزینهٔ  «ورود به حساب» کلیک کنید."},
              {text: "شمارهٔ موبایل خود را وارد و روی گزینهٔ «بعدی» کلیک کنید."},
              {text: "پس از وارد کردن شماره‌ موبایل، «کد تأیید» از طریق پیامک برای شما ارسال می‌شود."},
              {text: "کد را در قسمت مشخص شده وارد کنید و گزینهٔ «ورود» را بزنید."},
              {text: "پس از وارد کردن کد تأیید، حساب‌کاربری شما با موفقیت ساخته می‌شود."}
            ], pic: []}
          ]

        },{
          title: "چگونه اپلیکیشن دیوار را دانلود کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چگونه وارد حساب خود شوم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چگونه از حساب کاربری خود خارج شوم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        }
      ]
    },{
      title: "ثبت و مدیریت آگهی",
      categoryName: "",
      categoryHelp: [
        {
          title: "شرایط ثبت آگهی در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چگونه در دیوار آگهی ثبت کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "دسته‌بندی‌های اصلی دیوار کدامند؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چطور آگهی‌های خود را مدیریت کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        }
      ]
    },{
      title: "بررسی و رد آگهی",
      categoryName: "",
      categoryHelp: [
        {
          title: "چطور از علت حذف یا رد آگهی خود باخبر شوم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چرا آگهی من به خاطر دسته‌بندی غیرمرتبط رد شده است؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چرا آگهی من منتشر نشده است؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چرا آگهی من از روی دیوار حذف شده است؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "پرتکرارترین دلایل رد عکس آگهی کدامند؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        }
      ]
    },{
      title: "نمایش و جستجوی آگهی",
      categoryName: "",
      categoryHelp: [
        {
          title: "چگونه آگهی مورد نظر خود را در دیوار پیدا کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "صفحهٔ نمایش آگهی چه امکاناتی دارد؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چرا اطلاعات تماس برای من نمایش داده نمی‌شود؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "آگهی من در چه شهرهایی نمایش داده می‌شود؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چطور آگهی‌های ثبت‌شده در شهر دیگر را پیدا کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        }
      ]
    },{
      title: "چت و تماس امن دیوار",
      categoryName: "",
      categoryHelp: [
        {
          title: "چت دیوار چیست؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "تماس امن دیوار چیست؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "پستچی دیوار چیست؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "قوانین استفاده از چت دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چرا چت دیوار من مسدود شده است؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        }
      ]
    },{
      title: "پرداخت و موارد مالی",
      categoryName: "",
      categoryHelp: [
        {
          title: "آیا ثبت آگهی در دیوار هزینه دارد؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "خدمات دیوار برای ارتقای آگهی (نردبان، فوری و...) چیست؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چگونه از کد هدیه استفاده کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چرا وضعیت آگهی من «در انتظار پرداخت» است؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چطور در دیوار پرداخت انجام دهم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        }
      ]
    },{
      title: "تخلفات و گزارش ها",
      categoryName: "",
      categoryHelp: [
        {
          title: "فیشینگ (کلاهبرداری آنلاین از طریق درگاه بانکی غیر واقعی) چیست؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "در صورت ایجاد مزاحمت در کانال‌های ارتباطی چه‌کار کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چگونه مشکل یک آگهی را گزارش کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "در صورت دریافت درخواست مشکوک به کلاهبرداری چه کار کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "چطور شکایت خود را ثبت کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        }
      ]
    },{
      title: "دیوار کسب و کارها",
      categoryName: "",
      categoryHelp: [
        {
          title: "فروشگاه شما در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "نمایشگاه خودرو شما در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "آژانس املاک شما در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "سرویس استخدام شما در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        },
        {
          title: "پروفایل خدمات شما در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []},
            {type: "", body: [], pic: []}
          ]
        }
      ]
    },
  ]

  constructor(private navbarService: NavbarService, private titleService: Title) {
    console.log(this.supportList)
    this.navbarService.showNavbar = true;
    setTimeout(() => {
      this.navbarService.shouldActivated = 'posht';
    }, 500)
    this.titleService.setTitle(this.title)
  }


  search(searchValue: string) {
    console.log(searchValue)
  }
}
