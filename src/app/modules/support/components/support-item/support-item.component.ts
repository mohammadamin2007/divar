import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-support-item',
  templateUrl: './support-item.component.html',
  styleUrls: ['./support-item.component.scss']
})
export class SupportItemComponent {
  @Input("supportObj") support: {title: string, categoryName: string, categoryHelp: {title: string, body: string, helps: {type: string, body: {text: string}[], pic: {pic: string}[]}[]}[]}
  @Input("index") index: number
  active: number = 0
  activeBar: string = "website"


  open(model:HTMLDivElement, index: HTMLDivElement, title: HTMLDivElement,i:number) {
    model.classList.remove("hidden");
    model.classList.add("opacity-0");
    document.body.classList.add("overflow-hidden");
    setTimeout(() => {
      model.classList.add("opacity-100");
    },200)
    //i dont have any other way
    let regex = /«([\s\S]*?)»/g;
    let replacedText = this.support.categoryHelp[i].title.replace(regex, '!@##$%018230129498089808989898999989888898 $1!@##$%0182301294');
    let wordList = replacedText.split("!@##$%0182301294");
    wordList.forEach(item => {
      if(item.indexOf("98089808989898999989888898") === -1) {
        title.innerHTML += item;
      } else {
        title.innerHTML += `<span class="font-bold">${item.replace("98089808989898999989888898", "")}</span>`;
      }
    })
    regex = /«([\s\S]*?)»/g;
    replacedText = this.support.categoryHelp[i].title.replace(regex, '!@##$%018230129498089808989898999989888898 $1!@##$%0182301294');
    wordList = replacedText.split("!@##$%0182301294");
    wordList.forEach(item => {
      if(item.indexOf("98089808989898999989888898") === -1) {
        index.innerHTML += item;
      } else {
        index.innerHTML += `<span class="font-bold">${item.replace("98089808989898999989888898", "")}</span>`;
      }
    })
    regex = /<([\s\S]*?)>/g;
    replacedText = this.support.categoryHelp[i].body.replace(regex, '!@##$%018230129498089808989898999989888898 $1!@##$%0182301294');
    wordList = replacedText.split("!@##$%0182301294");
    wordList.forEach(item => {
      if(item.indexOf("98089808989898999989888898") === -1) {
        index.innerHTML += item;
      } else {
        index.innerHTML += `<a href="none" class="font-bold text-[red]">${item.replace("98089808989898999989888898", "")}</a>`;
      }
    })
  }

  close(model:HTMLDivElement) {
    model.classList.remove("opacity-100");
    model.classList.add("opacity-0");
    setTimeout(() => {
      model.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }, 500)
  }

  handelNavigation(shouldActive: number) {
    this.active = shouldActive;
    let activeList = ["website", "android", "ios"];
    this.activeBar = activeList[shouldActive];
  }
}