import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  trustList = [
    {
      trustImage: "enamad",
      href:"https://trustseal.enamad.ir/?id=45797&code=Ixo2TT4kdIkKs7d65xyM",
    },{
      trustImage: "kasbmajazi",
      href: "https://ecunion.ir/verify/divar.ir?token=44770755b49ddd059bcd"
    },{
      trustImage: "smandehi",
      href: "https://logo.samandehi.ir/Verify.aspx?id=129871&p=rfthuiwkpfvlmcsijyoerfth"
    },
  ]

  iconList = [
    {
      svvg: "fa fa-twitter",
      href: "https://twitter.com/divar_official"
    },{
      svvg: "fa fa-instagram",
      href: "https://www.instagram.com/divar.official"
    }
  ]
}
