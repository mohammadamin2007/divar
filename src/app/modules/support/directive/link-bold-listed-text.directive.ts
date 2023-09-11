import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appLinkBoldListedText]'
})
export class LinkBoldListedTextDirective {

  constructor(private element: ElementRef) {
    setTimeout(() => {
      this.handelBoldingAndMakeLinks(element.nativeElement.textContent, element.nativeElement);
    }, 500)
  }

  handelBoldingAndMakeLinks(string:string, whereToRender: HTMLDivElement) {
    whereToRender.innerHTML = "";
    let regex = /\[([\s\S]*?)]/g;
    let replacedText = string.replace(regex, '!@##$%0182301294 $1!@##$%0182301294');
    let wordListMargin = replacedText.split("!@##$%0182301294");
    wordListMargin.forEach(item => {
      if(item.trim() !== "") {
        regex = /«([\s\S]*?)»/g;
        replacedText = item.replace(regex, '!@##$%018230129498089808989898999989888898 $1!@##$%0182301294');
        regex = /<([\s\S]*?)>/g;
        replacedText = replacedText.replace(regex, '!@##$%01823012949808980898989899998988889909 $1!@##$%0182301294');
        regex = /{([\s\S]*?)}/g;
        replacedText = replacedText.replace(regex, '!@##$%01823012949808980898989899998988889910 $1!@##$%0182301294');
        let wordList = replacedText.split("!@##$%0182301294");
        let separate = document.createElement("p");
        separate.style.marginTop = "1rem";
        separate.style.marginBottom = "1rem";
        wordList.forEach(item => {
          if(item.indexOf("98089808989898999989888898") !== -1 || item.indexOf("9808980898989899998988889909") !== -1 || item.indexOf("9808980898989899998988889910") !== -1) {
            if(item.indexOf("98089808989898999989888898") !== -1) {
              separate.innerHTML += `<span class="font-bold">${item.replace("98089808989898999989888898", "")}</span>`;
            } else if (item.indexOf("9808980898989899998988889910") !== -1) {
              regex = /\+([\s\S]*?)\+/g;
              item = item.replace("9808980898989899998988889910", "");
              replacedText = item.replace(regex, '!@##$%01823012949808980898989899998988889910 $1!@##$%0182301294');
              let replaced = replacedText.split("!@##$%0182301294");
              replaced = replaced.filter(item => item.indexOf("949808980898989899998988889910") !== 1 && item.trim() !== "");
              let list = document.createElement("ul");
              list.style.listStyle = "disc";
              list.style.margin = "22px";
              replaced.forEach(item => {
                item = item.replace("9808980898989899998988889910", "");
                list.innerHTML += `
              <li>${item}</li>
            `
              })
              separate.appendChild(list)
            } else {
              regex = /~([\s\S]*?)~/g;
              item = item.replace("9808980898989899998988889909", "");
              replacedText = item.replace(regex, '!@##$%01823012949808980898989899998988889909 $1!@##$%0182301294');
              let replaced = replacedText.split("!@##$%0182301294");
              replaced = replaced.filter(item => item.indexOf("949808980898989899998988889909") !== 1 && item.trim() !== "");
              separate.innerHTML += `<a href="${replaced[0].replace("9808980898989899998988889909", "")}" class="font-bold text-[red]">${replaced[1].replace("9808980898989899998988889909", "")}</a>`;
            }
          } else {
            separate.innerHTML += item;
          }
        })
        whereToRender.appendChild(separate)
      }
    })
  }

}
