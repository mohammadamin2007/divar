import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {ServerService} from "../../../../services/server.service";
import {FormControl, FormGroup} from "@angular/forms";
import {GlobalValueService} from "../../../../services/global-value.service";

@Component({
  selector: 'app-support-main',
  templateUrl: './support-main.component.html',
  styleUrls: ['./support-main.component.scss']
})
export class SupportMainComponent implements AfterViewInit {
  @ViewChild("quickSupportModel") quickSupportModel: ElementRef
  title = "مرکز پشتیبانی دیوار"
  sendMailForm: FormGroup
  quickSupportList = [
    {
      text: "نحوه پرداخت و بازگشت وجه",
      supportItemList: [
        {
          text: "هزینهٔ پرداختی برای آگهی رد شده چطور بازگشت داده می‌شود؟",
          title: "هزینهٔ پرداختی برای آگهی رد شده چطور بازگشت داده می‌شود؟",
          content: "چنانچه بابت انتشار آگهی خود هزینه‌ای پرداخت کرده‌اید، در صورت رد آگهی این هزینه به صورت «اتوماتیک» به «همان حسابی که از آن پرداخت انجام شده است»، بازگشت داده می‌شود.\n" +
            "بنا به نوع پرداخت شما در صورت پرداخت از حساب بانکی مبلغ به همان حساب و در صورت پرداخت از اعتبار کافه‌بازار به اعتبار شما بازگردانده می‌شود.\n" +
            "اگر آگهی شما پس از انتشار توسط دیوار حذف شده است، جهت بررسی شرایط بازگشت وجه ‌می‌توانید با پشتیبانی دیوار تماس بگیرید.\n"
        }, {
          text: "راهنمای پرداخت",
          title: "راهنمای پرداخت",
          content: "[برای پرداخت هزینهٔ ثبت یا ارتقاء آگهی، بعد از ورود به سایت یا برنامهٔ دیوار، مراحل زیر را انجام دهید:] [« دیوار من> آگهی‌های من> انتخاب آگهی مورد نظر> انتخاب پرداخت و ارتقاء آگهی > انتخاب خدمت> انتخاب گزینهٔ پرداخت> اتصال به درگاه پرداخت » ] [ لطفاً قبل از پرداخت موارد زیر را بررسی کنید:]" +
            "[{" +
            " +استفاده از اینترنت مناسب+" +
            "+خاموش بودن فیلترشکن+" +
            "+به‌روز بودن برنامهٔ دیوار+" +
            "}]" +
            "[توجه: اگر بانک شما در لیست بانک‌های «پرداخت مستقیم» نیست، حتماً از گزینهٔ «کیف پول» برای پرداخت استفاده کنید.]" +
            "" +
            "[بعد از انتخاب گزینهٔ «افزایش موجودی» وارد درگاه شوید و پرداخت خود را انجام دهید.]"
        }, {
          text: "نکات پرداخت از درگاه کافه بازار (بازارپی)",
          title: "",
          content: ""
        }, {
          text: "چطور از هزینهٔ ثبت و ارتقاء آگهی خود آگاه شوم؟",
          title: "",
          content: ""
        }, {
          text: "رمز دوم ندارم، چطور پرداخت انجام دهم؟",
          title: "",
          content: ""
        }
      ]
    }, {
      text: "علت رد و حذف آگهی",
      supportItemList: [
        {
          text: "چرا آگهی من با دلیل «ثبت آگهی تکراری و مشابه» رد شده است؟",
          title: "",
          content: ""

        }, {
          text: "چرا آگهی من با دلیل «آگهی‌های کسب‌و‌کار و نیاز به ثبت در دسته‌بندی خدمات یا پنل فروشگاهی» رد شده است؟",
          title: "",
          content: ""

        }, {
          text: "چرا آگهی من با دلیل «نیاز به پرداخت هزینهٔ لینک وب‌سایت» نیازمند ویرایش است؟",
          title: "",
          content: ""
        }
      ]
    }, {
      text: "مسدودیت چت یا حساب کاربری",
      supportItemList: [
        {
          text: "چرا حساب کاربری‌ام مسدود شده و نمی‌توانم از دیوار استفاده کنم؟",
          title: "",
          content: ""
        }, {
          text: "چرا نمی‌توانم‌ از چت دیوار استفاده کنم‌ و پیام مسدودی یا محدودیت‌ دریافت کرده‌ام؟",
          title: "",
          content: ""
        }
      ]
    }, {
      text: "ورود و خروج حساب کاربری",
      supportItemList: [
        {
          text: "نحوه ورود و خروج حساب کاربری",
          title: "",
          content: ""
        }, {
          text: "دانلود برنامهٔ دیوار",
          title: "",
          content: ""
        }, {
          text: "مشکل ورود به حساب کاربری",
          title: "",
          content: ""
        }, {
          text: "پیامک کد تأیید دریافت نشده است",
          title: "",
          content: ""
        }, {
          text: "پیامک کد تأیید را دریافت کرده‌ام، اما نمی‌توانم وارد حساب شوم (کد تأیید نامعتبر)",
          title: "",
          content: ""
        }
      ]
    }, {
      text: "جستجو و نمایش آگهی",
      supportItemList: [
        {
          text: "نمی‌توانم آگهی منتشر شده‌ٔ خود را در لیست جستجو پیدا کنم.",
          title: "",
          content: ""
        }, {
          text: "چرا قیمت آگهی خودرویی که ثبت کرده‌ام «غیرقابل نمایش» است؟",
          title: "",
          content: ""
        }
      ]
    }, {
      text: "خدمات مربوط به ارتقا آگهی (نردبان، تمدید، فوری و ....)",
      supportItemList: [
        {
          text: "برای افزایش‌ بازدید و بازخورد آگهی خود چه کار کنم؟",
          title: "",
          content: ""
        }, {
          text: "امکانات دیوار برای ارتقای آگهی چیست؟",
          title: "",
          content: ""
        }
      ]
    }, {
      text: "مشکلات دیوار کسب‌و‌کارها",
      supportItemList: [
        {
          text: "دیوار فروشگاه",
          title: "",
          content: ""
        }, {
          text: "پروفایل خدمات",
          title: "",
          content: ""
        }
      ]
    }, {
      text: "تأیید هویت",
      supportItemList: [
        {
          text: "چرا برای تأیید هویت و ثبت آگهی باید کد ملی ثبت کنم‌؟ آیا به کاربران نمایش داده می‌شود؟",
          title: "",
          content: ""
        }, {
          text: "چرا در مرحلهٔ تأیید هویت و ثبت کد ملی خطای «عدم تطابق کد ملی و حساب کاربری» دریافت می‌کنم؟",
          title: "",
          content: ""
        }
      ]
    }, {
      text: "مشکل ثبت و ویرایش آگهی",
      supportItemList: [
        {
          text: "چرا پیام «ارسال بیش از حد مجاز» دریافت کردم و برای ثبت آگهی باید هزینه پرداخت کنم؟",
          title: "",
          content: ""
        }, {
          text: "بارگذاری عکس آگهی",
          title: "",
          content: ""
        }, {
          text: "آیا ثبت دوباره‌ و چندین بارهٔ یک آگهی امکان‌پذیر است‌؟",
          title: "",
          content: ""
        }, {
          text: "چطور آگهی خود را ویرایش کنم؟",
          title: "",
          content: ""
        }, {
          text: "چطور آگهی خود را حذف کنم؟",
          title: "",
          content: ""
        }, {
          text: "آگهی ثبت یا ویرایش کردم، بررسی و انتشار آن چه مدت زمان می‌برد؟",
          title: "",
          content: ""
        }, {
          text: "اگر آگهی را ویرایش کنم، آیا در مدت زمان بررسی همچنان بازدید کننده دارد؟",
          title: "",
          content: ""
        }, {
          text: "آگهی منتشر شده تا چه زمانی روی دیوار می‌ماند؟",
          title: "",
          content: ""
        }, {
          text: "آگهی من منقضی شده و برای ثبت آگهی جدید اطلاعات آگهی قبلی را نیاز دارم",
          title: "",
          content: ""
        }, {
          text: "آیا آگهی منقضی‌شده را می‌شود دوباره منتشر کرد؟",
          title: "",
          content: ""
        }, {
          text: "چطور دسته‌بندی صحیح آگهی خود را انتخاب کنم؟",
          title: "",
          content: ""
        }
      ]
    }, {
      text: "مشکل چت",
      supportItemList: [
        {
          text: " چرا سابقهٔ چت‌های قبلی‌ خود را نمی‌بینم‌؟",
          title: "",
          content: ""
        },{
          text: "چرا بالای صفحه‌ٔ چت خود پیام «offline» می‌بینم؟",
          title: "",
          content: ""
        },{
          text: "چطور می‌توانم کاربری را در چت مسدود کنم؟",
          title: "",
          content: ""
        },
      ]
    }
  ]
  timeoutTime = 300
  quickSupportOpen = -1
  quickSupportOpenList:{text: string;}[]
  showSupportList = false;
  showQuickSupportContent = false
  contentIndex = -1
  quickSupportContent: {text: string, title: string, content: string}
  showFooter = true
  showFooterMessage = false
  FooterMessageTransition = false
  sentFeedBacksContents: number[] = []

  constructor(public navbarService: NavbarService, private titleService: Title, private router: Router, public readonly globalValue: GlobalValueService,private activatedRoute: ActivatedRoute, private server: ServerService) {
    setTimeout(() => {
      this.navbarService.shouldActivated = 'posht';
    }, 500)
    this.titleService.setTitle(this.title);
    this.sendMailForm = new FormGroup({
      email: new FormControl(""),
      subject: new FormControl(""),
      contactNumber: new FormControl(""),
      title: new FormControl(""),
      text: new FormControl(""),
      file: new FormControl(""),
    })
  }
  ngAfterViewInit() {
    // make an ngif and define the route with page variable and then make link with query param
    this.activatedRoute.queryParams.subscribe(item => {
      setTimeout(() => {
        if(item?.['quickSupport'] === 'true') {
          this.openModel(this.quickSupportModel.nativeElement);
        } else {
          this.closeModel(this.quickSupportModel.nativeElement);
        }
        if(item?.['activated'] !== undefined) {
          if(item?.['activated'] === this.quickSupportList.length) {

          } else {
            this.quickSupportOpen = item?.['activated']
            this.quickSupportOpenList = this.quickSupportList[item?.['activated']].supportItemList;
            this.showSupportList = true;
            if(item?.['content'] !== undefined) {
              this.contentIndex = item?.['content']
              this.showFooter = this.sentFeedBacksContents.indexOf(this.contentIndex) === -1;
              this.showSupportList = false;
              this.showQuickSupportContent = true;
              this.quickSupportContent = this.quickSupportList[this.quickSupportOpen].supportItemList[this.contentIndex];
            } else {
              this.contentIndex = -1
              this.showQuickSupportContent = false;
            }
          }
        } else {
          this.showSupportList = false;
          this.quickSupportOpen = -1
          this.quickSupportOpenList = []
          this.showSupportList = false;
          this.showQuickSupportContent = false
          this.contentIndex = -1
          this.quickSupportContent = {text: "", content: "", title: ""}
        }
        this.timeoutTime = 0;
      }, this.timeoutTime)
    });
    this.router.events.subscribe(val => {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "";
      this.navbarService.marginRight = false;
      this.navbarService.showNavbar = true;
    })
  }

  search(searchValue: string) {
    console.log(searchValue)
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
    this.quickSupportOpen = 0;
  }

  sendFeedback(feedback: string, messageContainer: HTMLDivElement, content: number) {
    this.sentFeedBacksContents.push(content)
    this.showFooter = false;
    messageContainer.style.transition = "transform 1s cubic-bezier(0.02, 0.54, 0, 3)";
    setTimeout(() => {
      messageContainer.style.transform = "";
      setTimeout(() => {
        messageContainer.style.transition = "transform 0.6s cubic-bezier(0.78, -0.7, 0.95, -0.24)";
        setTimeout(() => {
          messageContainer.style.transform = "translateY(10vh)";
        },100)
      }, 2000)
    }, 100)
  }
}

