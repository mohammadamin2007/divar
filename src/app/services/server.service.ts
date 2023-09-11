import { Injectable } from '@angular/core';
import {GlobalValueService} from "./global-value.service";
import {group} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  availableCities = [
    'Tehran',
    'Mashhad',
    'Isfahan',
    'Karaj',
    'Shiraz',
    'Abadan',
    'Ahvaz',
    'Qom',
    'Kermanshah',
    'Zahedan',
    'Rasht',
    'Kerman',
    'Urmia',
    'Hamedan',
    'Yazd',
    'Gorgan',
    'Bandar Abbas',
    'Sari',
    'Semnan',
    'Arak',
    'Qazvin',
    'Khorramabad',
    'Khoy',
    'Kashan',
    'Najafabad',
    'Malayer',
    'Gonabad',
    'Shahrekord',
    'Bojnourd',
    'Sanandaj',
    'Shahroud',
    'Babol',
    'Amol',
    'Bushire',
    'Ramsar',
    'Sabzevar',
    'Qaem Shahr',
    'Maragheh',
    'Qarchak',
    'Kazeroon',
    'Kurdistan',
    'Dezful',
    'Astaneh ye Ashrafiyeh',
    'Bafq',
    'Kelaleh',
    'Sarpol e Zahab',
    'Shahriar',
    'Nishapur',
    'Tabriz',
    'Shush',
    'Rafsanjan',
    'Golestan',
    'Shahdad',
    'Dargaz',
    'Bukan',
    'Mahshahr',
    'Sanat e Shahr',
    'Shahreza',
    'Fasa',
    'Behbahan',
    'Ghain',
    'Qeshm',
    'Kordestan',
    'Sirjan',
    'Sangan',
    'Chalus',
    'Amol',
    'Shabestar',
    'Nahavand',
    'Andimeshk',
    'Nurabad',
    'Varamin',
    'Neyriz',
    'Konartakhteh',
    'Kuhdasht',
    'Miandoab',
    'Salmas',
    'Bandar e Gaz',
    'Maku',
    'Baneh',
    'Mahabad',
    'Firuzkuh',
    'KhalKhal',
    'Marand',
    'Gilan e Gharb',
    'Naqadeh',
    'Rudsar',
    'Savojbolagh',
    'Qods',
    'Naein',
    'Saravan',
    'Rigan',
    'Qaemiyyeh',
    'Nikshahr',
    'Gilpayan',
    'Mahmudabad',
    'Baig',
    'Shahrbabak',
    'Ardabil',
    'Bandar Lengeh',
    'Behshahr',
    'Babolsar',
    'Taleqan',
    'Kiyar',
    'Soltanieh',
    'Saghez',
    'Malkan',
    'Mehran',
    'Damghan',
    'Khoyaf',
    'Mariwan',
    'Najafshahr',
    'Cheram',
    'Siahkal',
    'Shemiran',
    'Dashtestan',
    'Azna',
    'Shahraki',
    'Farashband',
    'Mohammadia',
    'Mahallat',
    'Rodbar',
    'Hamidia',
    'Abiek',
    'Mimeh',
    'Khoyam',
    'Sarab e Bala',
    'Savadkuh',
    'Mahdi shahr',]
  availableCitiesInPersian = [
    'تهران',
    'مشهد',
    'اصفهان',
    'کرج',
    'شیراز',
    'آبادان',
    'اهواز',
    'قم',
    'کرمانشاه',
    'زاهدان',
    'رشت',
    'کرمان',
    'ارومیه',
    'همدان',
    'یزد',
    'گرگان',
    'بندرعباس',
    'ساری',
    'سمنان',
    'اراک',
    'قزوین',
    'خرم‌آباد',
    'خوی',
    'کاشان',
    'نجف‌آباد',
    'ملایر',
    'گناباد',
    'شهرکرد',
    'بجنورد',
    'سنندج',
    'شاهرود',
    'بابل',
    'آمل',
    'بوشهر',
    'رامسر',
    'سبزوار',
    'قائم‌شهر',
    'مراغه',
    'قرچک',
    'کازرون',
    'کردستان',
    'دزفول',
    'آشتیان',
    'بافق',
    'کلاله',
    'سرپل‌ذهاب',
    'شهریار',
    'نیشابور',
    'تبریز',
    'شوش',
    'رفسنجان',
    'گلستان',
    'شهداد',
    'درگز',
    'بوکان',
    'ماهشهر',
    'صنعت شهر',
    'شهرضا',
    'فسا',
    'بهبهان',
    'قائن',
    'قشم',
    'کرند',
    'سیرجان',
    'سنگان',
    'چالوس',
    'املش',
    'شبستر',
    'نهاوند',
    'اندیمشک',
    'نورآباد',
    'ورامین',
    'نی‌ریز',
    'کنارتخته',
    'کوهدشت',
    'میاندوآب',
    'سلماس',
    'بندر گز',
    'ماکو',
    'بانه',
    'مهاباد',
    'فیروزکوه',
    'خلخال',
    'مرند',
    'گیلانغرب',
    'نقده',
    'رودسر',
    'ساوجبلاغ',
    'قدس',
    'نائین',
    'سراوان',
    'ریگان',
    'قائمیه',
    'نیک‌شهر',
    'گلپایگان',
    'محمودآباد',
    'بایگ',
    'شهربابک',
    'اردبیل',
    'بندر لنگه',
    'بهشهر',
    'بابلسر',
    'طالقان',
    'کیار',
    'سلطانیه',
    'سقز',
    'ملکان',
    'مهران',
    'دامغان',
    'خواف',
    'مریوان',
    'نجف‌شهر',
    'چرام',
    'سیاهکل',
    'شمیران',
    'دشتستان',
    'ازنا',
    'شهرکی',
    'فراشبند',
    'محمدیه',
    'محلات',
    'رودبار',
    'حمیدیا',
    'آبیک',
    'میمه',
    'خمام',
    'سرابله',
    'سوادکوه',
    'مهدی‌شهر'
  ]
  subjectsSendMail = [
    {
      title: "ورود و حساب کاربری",
    }, {
      title: "ثبت و مدیریت آگهی",
    },{
      title: "بررسی و رد آگهی",
    }, {
      title: "نمایش و جستجوی آگهی",
    },{
      title: "چت دیوار",
    }, {
      title: "پرداخت و موارد مالی",
    }, {
      title: "تخلفات و گزارش ها",
    }, {
      title: "پنل فروشگاه",
    }, {
      title: "پنل نمایشگاه خودرو",
    }, {
      title: "پنل املاک",
    }, {
      title: "پنل استخدام",
    }, {
      title: "پروفایل خدمت",
    }, {
      title: "سایر موارد",
    }
  ]
  supportList = [
    {
      title: "ورود و حساب کاربری",
      categoryName: "categoy-account",
      categoryHelp: [
        {
          title: "چگونه در «دیوار» حساب کاربری بسازم؟",
          body: "روی گزینهٔ «دیوار من» کلیک کنید. گزینه‌ٔ «ورود به حساب» را انتخاب کرده و شمارهٔ تماس خود را وارد کنید. برای اطمینان از صحیح بودن شمارهٔ موبایل وارد شده، کد تأیید برای شما ارسال می‌شود و پس از وارد کردن کد، ساخت حساب‌ کاربری شما تکمیل می‌شود.برای استفاده از تمام امکانات و ثبت آگهی باید یک حساب کاربری در دیوار بسازید. ساخت حساب کاربری در دیوار به راحتی و با وارد کردن شمارهٔ موبایل امکان‌پذیر است. برای ساخت حساب کاربری کافی است روی گزینهٔ «دیوار من» کلیک کنید و سپس مراحل زیر را طی کنید:نکته اگر دیوار را نصب نکردید از <~linkIsHERE~ ~اینجا~> نصب کنید.",
          helps: [
            {type: "website", body: [
                {text: "در وب‌سایت دیوار و از منوی بالا، روی گزینهٔ «دیوار من» کلیک کنید."},
                {text: "از منوی باز شده روی گزینهٔ «ورود» کلیک کنید."},
                {text: "شمارهٔ موبایل خود را وارد کرده و سپس روی گزینهٔ «تأیید» کلیک کنید."},
                {text: "پس از وارد کردن شماره‌ موبایل، «کد تأیید» از طریق پیامک برای شما ارسال می‌شود."},
                {text: "کد را در قسمت مشخص شده وارد کنید و گزینهٔ «ورود» را بزنید."},
                {text: "پس از وارد کردن کد تأیید، حساب‌کاربری شما با موفقیت ساخته می‌شود."}
              ], pic: [
                {
                  picture: "assets/images/A1-1.jpg"
                }, {
                  picture: "assets/images/A1-2.jpg"
                }, {
                  picture: "assets/images/A1-3.jpg"
                }, {
                  picture: "assets/images/A1-4.jpg"
                }, {
                  picture: "assets/images/A1-5.jpg"
                },
              ]},
            {type: "android", body: [
                {text: "در اپلیکیشن دیوار و از منوی پایین، روی گزینهٔ «دیوار من» کلیک کنید."},
                {text: "در صفحهٔ دیوار من، روی گزینهٔ  «ورود به حساب» کلیک کنید."},
                {text: "شمارهٔ موبایل خود را وارد و روی گزینهٔ «بعدی» کلیک کنید."},
                {text: "پس از وارد کردن شماره‌ موبایل، «کد تأیید» از طریق پیامک برای شما ارسال می‌شود."},
                {text: "کد را در قسمت مشخص شده وارد کنید و گزینهٔ «ورود» را بزنید."},
                {text: "پس از وارد کردن کد تأیید، حساب‌کاربری شما با موفقیت ساخته می‌شود."}
              ], pic: [
                {picture: ""}
              ]},
            {type: "ios", body: [
                {text: "در اپلیکیشن دیوار و از منوی پایین، روی گزینهٔ «دیوار من» کلیک کنید."},
                {text: "در صفحهٔ دیوار من، روی گزینهٔ  «ورود به حساب» کلیک کنید."},
                {text: "شمارهٔ موبایل خود را وارد و روی گزینهٔ «بعدی» کلیک کنید."},
                {text: "پس از وارد کردن شماره‌ موبایل، «کد تأیید» از طریق پیامک برای شما ارسال می‌شود."},
                {text: "کد را در قسمت مشخص شده وارد کنید و گزینهٔ «ورود» را بزنید."},
                {text: "پس از وارد کردن کد تأیید، حساب‌کاربری شما با موفقیت ساخته می‌شود."}
              ], pic: [
                {picture: ""}
              ]}
          ]

        },{
          title: "چگونه اپلیکیشن دیوار را دانلود کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چگونه وارد حساب خود شوم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چگونه از حساب کاربری خود خارج شوم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        }
      ]
    },
    {
      title: "ثبت و مدیریت آگهی",
      categoryName: "",
      categoryHelp: [
        {
          title: "شرایط ثبت آگهی در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چگونه در دیوار آگهی ثبت کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "دسته‌بندی‌های اصلی دیوار کدامند؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "آیا برای ثبت آگهی باید حساب کاربری بسازم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چطور آگهی‌های خود را مدیریت کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        }
      ]
    },
    {
      title: "بررسی و رد آگهی",
      categoryName: "",
      categoryHelp: [
        {
          title: "چطور از علت حذف یا رد آگهی خود باخبر شوم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چرا آگهی من به خاطر دسته‌بندی غیرمرتبط رد شده است؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چرا آگهی من منتشر نشده است؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چرا آگهی من از روی دیوار حذف شده است؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "پرتکرارترین دلایل رد عکس آگهی کدامند؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        }
      ]
    },
    {
      title: "نمایش و جستجوی آگهی",
      categoryName: "",
      categoryHelp: [
        {
          title: "چگونه آگهی مورد نظر خود را در دیوار پیدا کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "صفحهٔ نمایش آگهی چه امکاناتی دارد؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چرا اطلاعات تماس برای من نمایش داده نمی‌شود؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "آگهی من در چه شهرهایی نمایش داده می‌شود؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چطور آگهی‌های ثبت‌شده در شهر دیگر را پیدا کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        }
      ]
    },
    {
      title: "چت و تماس امن دیوار",
      categoryName: "",
      categoryHelp: [
        {
          title: "چت دیوار چیست؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "تماس امن دیوار چیست؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "پستچی دیوار چیست؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "قوانین استفاده از چت دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چرا چت دیوار من مسدود شده است؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        }
      ]
    },
    {
      title: "پرداخت و موارد مالی",
      categoryName: "",
      categoryHelp: [
        {
          title: "آیا ثبت آگهی در دیوار هزینه دارد؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "خدمات دیوار برای ارتقای آگهی (نردبان، فوری و...) چیست؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چگونه از کد هدیه استفاده کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چرا وضعیت آگهی من «در انتظار پرداخت» است؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چطور در دیوار پرداخت انجام دهم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        }
      ]
    },
    {
      title: "تخلفات و گزارش ها",
      categoryName: "",
      categoryHelp: [
        {
          title: "فیشینگ (کلاهبرداری آنلاین از طریق درگاه بانکی غیر واقعی) چیست؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "در صورت ایجاد مزاحمت در کانال‌های ارتباطی چه‌کار کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چگونه مشکل یک آگهی را گزارش کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "در صورت دریافت درخواست مشکوک به کلاهبرداری چه کار کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "چطور شکایت خود را ثبت کنم؟",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        }
      ]
    },
    {
      title: "دیوار کسب و کارها",
      categoryName: "",
      categoryHelp: [
        {
          title: "فروشگاه شما در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "نمایشگاه خودرو شما در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "آژانس املاک شما در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "سرویس استخدام شما در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        },
        {
          title: "پروفایل خدمات شما در دیوار",
          body: "",
          helps: [
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]},
            {type: "", body: [], pic: [
                {picture: ""}
              ]}
          ]
        }
      ]
    },
  ]
  addNewData = [
    {
      title: 'املاک',
      image: "home",
      spClass: "",
      boxHeight: "64",
      groups: [
        {
          text: 'اجارهٔ مسکونی',
          groups: [
            {
              text: "اجارهٔ آپارتمان",
              form: "rent-apartment",
            },
            {
              text: "اجارهٔ خانه و ویلا",
              form: "rent-apartment"
            }
          ]
        },
        {
          text: 'فروش مسکونی',
          groups: [
            {
              text: "فروش آپارتمان",
              form: "sell-apartment"
            },
            {text: "فروش خانه و ویلا"},
            {text: "فروش زمین و کلنگی"},
          ]
        },
        {
          text: 'فروش دفاتر اداری و تجاری',
          groups: [
            {text: "فروش دفتر کار، دفتر اداری و مطب"},
            {text: "فروش مغازه و غرفه"},
            {text: "فروش دفاتر صنعتی، کشاورزی و تجاری"}
          ]
        },
        {
          text: 'اجارهٔ دفاتر اداری و تجاری',
          groups: [
            {text: "اجارهٔ دفتر کار، اتاق اداری و مطب"},
            {text: "اجارهٔ مغازه و غرفه"},
            {text: "اجارهٔ دفاتر صنعتی، کشاورزی و تجاری"},
          ]
        },
        {
          text: 'پرو‌ژه‌های ساخت و ساز',
          groups: [
            {text: "مشارکت در ساخت املاک"},
            {text: "پیش‌فروش ملک"}
          ]
        },
        {
          text: 'اجارهٔ کوتاه مدت',
          groups: [
            {text: "اجارهٔ کوتاه مدت آپارتمان و سوئیت"},
            {text: "اجارهٔ کوتاه مدت ویلا و باغ"},
            {text: "اجارهٔ کوتاه مدت دفتر کار و فضای آموزشی"},
            {text: "متفرقه"},
          ]
        },
    ]},
    {
      title: 'وسایل نقلیه',
      image: "car",
      spClass: "px-[1px]",
      boxHeight: "64",
      groups: [
        {
          text: 'خودرو',
          groups: [
            {text: "سواری و وانت"},
            {text: "خودروی اجاره‌ای"},
            {text: "خودروی کلاسیک"},
            {text: "خودروی سنگین"},
          ]
        },
        {
          text: 'قطعات یدکی و لوازم جانبی خودرو',
          groups: [
            {text: "قطعات یدکی و لوازم جانبی خودرو"},
          ]
        },
        {
          text: 'موتورسیکلت',
          groups: [
            {text: "موتورسیکلت"},
          ]
        },
        {
          text: 'قایق و سایر وسایل نقلیه',
          groups: [
            {text: "قایق و سایر وسایل نقلیه"},
          ]
        },
    ]},
    {
      title: 'کالای دیجیتال',
      image: "mobile",
      spClass: "mr-[3px_!important] pl-[4px]",
      boxHeight: "64",
      groups: [
        {
          text: 'موبایل و تبلت',
          groups: [
            {text: "موبایل"},
            {text: "تبلت"},
            {text: "لوازم جانبی موبایل و تبلت"},
            {text: "سیم‌کارت"},
          ]
        },
        {
          text: 'رایانه',
          groups: [
            {text: "رایانه همراه"},
            {text: "رایانه رومیزی"},
            {text: "قطعات و لوازم جانبی رایانه"},
            {text: "مودم و تجهیزات شبکه رایانه"},
            {text: "پرینتر، اسکنر، کپی، فکس"},
          ]
        },
        {
          text: 'کنسول,بازی ویدئویی و آنلاین',
          groups: [
            {text: "کنسول,بازی ویدئویی و آنلاین"},
          ]
        },
        {
          text: 'صوتی و تصویری',
          groups: [
            {text: "فیلم و موسیقی"},
            {text: "دوربین عکاسی و فیلم‌برداری"},
            {text: "پخش‌کننده همراه"},
            {text: "سیستم صوتی خانگی"},
            {text: "ویدئو و پخش کننده DVD"},
            {text: "تلویزیون و پروژکتور"},
            {text: "دوربین مداربسته"},
            {text: "متفرقه"},
          ]
        },
        {
          text: 'تلفن رومیزی',
          groups: [
            {text: "تلفن رومیزی"},
          ]
        },
    ]},
    {
      title: 'خانه و آشپزخانه',
      image: "coffee",
      spClass: "mr-[-3px_!important]",
      boxHeight: "120",
      groups: [
        {
          text: 'لوازم خانگی برقی',
          groups: [{text: ""}]
        },
        {
          text: 'ظروف و لوازم آشپزخانه',
          groups: [{text: ""}]
        },
        {
          text: 'خوردنی و آشامیدنی',
          groups: [{text: ""}]
        },
        {
          text: 'خیاطی و بافتنی',
          groups: [{text: ""}]
        },
        {
          text: 'مبلمان و صنایع چوب',
          groups: [{text: ""}]
        },
        {
          text: 'نور و روشنایی',
          groups: [{text: ""}]
        },
        {
          text: 'فرش',
          groups: [{text: ""}]
        },
        {
          text: 'گلیم و موکت',
          groups: [{text: ""}]
        },
        {
          text: 'تشک',
          groups: [{text: ""}]
        },
        {
          text: 'روتختی و رختخواب',
          groups: [{text: ""}]
        },
        {
          text: 'لوازم دکوری و تزئینی',
          groups: [{text: ""}]
        },
        {
          text: 'تهویه',
          groups: [{text: ""}]
        },
        {
          text: 'سرمایش و گرمایش',
          groups: [{text: ""}]
        },
        {
          text: 'شست‌وشو و نظافت',
          groups: [{text: ""}]
        },
        {
          text: 'حمام و سرویس بهداشتی',
          groups: [{text: ""}]
        },
      ]},
    {
      title: 'خدمات',
      image: "paint-brush",
      spClass: "",
      boxHeight: "120",
      groups: [
        {
          text: 'خدمات موتور و ماشین',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'خدمات پذیرایی/مراسم',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'خدمات رایانه‌ای و موبایل',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'خدمات مالی/حسابداری/بیمه',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'خدمات حمل و نقل',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'خدمات پیشه و مهارت',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'خدمات آرایشگری و زیبایی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'سرگرمی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'خدمات نظافت',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'خدمات باغبانی و درختکاری',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'خدمات آموزشی',
          groups: [
            {text: ""}
          ]
        },
    ]},
    {
      title: 'وسایل شخصی',
      image: "clock-o",
      spClass: "",
      boxHeight: "64",
      groups: [
        {
          text: 'کیف',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'کفش و لباس',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'زیورآلات و اکسسوری',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'وسایل آرایشی، بهداشتی و درمانی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'وسایل بچه و اسباب بازی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'لوازم التحریر',
          groups: [
            {text: ""}
          ]
        },
    ]},
    {
      title: 'سرگرمی و فراغت',
      image: "dice",
      spClass: "ml-[-4px_!important] pl-[1rem]",
      boxHeight: "64",
      groups: [
        {
          text: 'بلیط، تور و چارتر',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'کتاب و مجله',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'دوچرخه',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'اسکیت',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'اسکوتر',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'حیوانات',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'کلکسیون و سرگرمی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'آلات موسیقی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'ورزش و تناسب اندام',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'اسباب‌ بازی',
          groups: [
            {text: ""}
          ]
        },
    ]},
    {
      title: 'اجتماعی',
      image: "user-friends",
      spClass: "ml-[-3px_!important] pl-[1rem]",
      boxHeight: "64",
      groups: [
        {
          text: 'رویداد',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'فعالیت داوطلبانه',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'گم‌شده‌ها',
          groups: [
            {text: ""}
          ]
        },
    ]},
    {
      title: 'تجهیزات و صنعتی',
      image: "chair",
      spClass: "pl-[6px]",
      boxHeight: "64",
      groups: [
        {
          text: 'مصالح و تجهیزات ساختمان',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'ابزارآلات',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'ماشین‌آلات صنعتی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'تجهیزات کسب‌وکار',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'عمده‌فروشی',
          groups: [
            {text: ""}
          ]
        },
    ]},
    {
      title: 'استخدام و کاریابی (غیر رایگان)',
      image: "briefcase",
      spClass: "ml-[3px_!important] pl-[1rem]",
      boxHeight: "148",
      groups: [
        {
          text: 'استخدام اداری و مدیریت',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'استخدام سرایداری و نظافت',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'استخدام معماری، عمران و ساختمانی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'استخدام خدمات فروشگاه و رستوران',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'استخدام رایانه و فناوری اطلاعات',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'استخدام مالی و حسابداری و حقوقی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'استخدام بازاریابی و فروش',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'استخدام صنعتی، فنی و مهندسی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'استخدام آموزشی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'استخدام حمل و نقل',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'استخدام درمانی، زیبایی و بهداشتی',
          groups: [
            {text: ""}
          ]
        },
        {
          text: 'استخدام هنری و رسانه',
          groups: [
            {text: ""}
          ]
        },
    ]}
  ]
  // cityNeighbours = {
  //   'تهران': [
  //
  //   ]
  // }

  constructor(private globalService: GlobalValueService) {}


  addNewDataTitles() {
    let titleList:{text: string, image: string, spClass: string, group: string, boxHeight: string}[] = [];
    this.addNewData.forEach(item => {
      let groups = "";
      item.groups.forEach(group => {
        groups += `${group.text},`
      })
      groups = groups.slice(0, groups.length - 1);
      titleList.push({text: item.title, image: item.image, spClass: item.spClass, group: groups, boxHeight: item.boxHeight});
    })
    this.globalService.newDataIsLoading = false;

    return titleList;
  }

  addNewDataTitlesItem(id: number) {
    let titleList: {title: string,groups: {text: string}[]};
    titleList = {
      title: this.addNewData[id].title,
      groups: this.addNewData[id].groups
    };
    this.globalService.newDataIsLoading = false;
    return titleList;
  }

  addNewDataCategoryGroups(id: number, id2: number) {
    let titleList: {majorTitle: string,title: string,groups: {text: string}[]};
    titleList = {
      majorTitle: this.addNewData[id].title,
      title: this.addNewData[id].groups[id2].text,
      groups: this.addNewData[id].groups[id2].groups,
    };
    this.globalService.newDataIsLoading = false;
    return titleList;
  }


  returnNameOfCategory(id: number, id2: number, id3: number) {
    this.globalService.newDataIsLoading = false;
    return this.addNewData[id].groups[id2].groups[id3];
  }

}
