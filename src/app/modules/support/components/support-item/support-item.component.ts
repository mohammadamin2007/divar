import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-support-item',
  templateUrl: './support-item.component.html',
  styleUrls: ['./support-item.component.scss']
})
export class SupportItemComponent {
  @Input("supportObj") support: {title: string, categoryName: string, categoryHelp: {title: string, body: string, helps: {type: string, body: {text: string}[], pic: {picture: string}[]}[]}[]}
  @Input("index") index: number
  active: number = 0
  activeBar: string = "website"
  activeSlide = 0
  allowed = true
  dragAllowed = false ;
  sliderWidth = 535
  changeByButton = false;
  supportActivatedItem: number[];

  open(model:HTMLDivElement, index: HTMLDivElement, title: HTMLDivElement,i:number, indexer:number) {
    this.supportActivatedItem = [indexer, i]
    model.classList.remove("hidden");
    model.classList.add("opacity-0");
    document.body.classList.add("overflow-hidden");
    setTimeout(() => {
      model.classList.add("opacity-100");
    },200);
    this.activeSlide = 0;
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

  handelSlider(action: string, length: number) {
    if(this.allowed) {
      this.changeByButton = true;
      this.allowed = false;
      if(this.activeSlide !== 0 && action === 'back') {
        this.activeSlide -= 1
      } else if(this.activeSlide !== length - 1 && action === 'next') {
        this.activeSlide += 1
      }
      setTimeout(() => {
        this.allowed = true;
        this.changeByButton = false;
      },600)
    }
  }

  handelDrag(event: MouseEvent, slider: HTMLDivElement){
    if(this.dragAllowed){
        slider.style.transform = 'translateX('+ (parseInt(slider.style.transform.replaceAll(/\D+/g,"")) + event.movementX ) + 'px)';
    }
  }

  handelSet(event: MouseEvent) {
    // @ts-ignore
    if (event.target?.['className'].indexOf('fa') === -1) {
      this.dragAllowed = true;
    }
  }

  handelDisable(event: MouseEvent, slider:HTMLDivElement) {
    // @ts-ignore
    if (event.target?.['className'].indexOf('fa') === -1) {
      this.changeByButton = true;
      setTimeout(() => {
        this.changeByButton = false;
      },500)
      if (parseInt(slider.style.transform.replaceAll(/\D+/g,"")) > this.sliderWidth * (this.support.categoryHelp[this.supportActivatedItem[0]].helps[this.supportActivatedItem[1]].pic.length - 1)) {
        slider.style.transform = 'translateX('+ (this.activeSlide * this.sliderWidth) + 'px)';
      }
      if(parseInt(slider.style.transform.replaceAll(/\D+/g,"")) < this.sliderWidth *this.activeSlide - this.sliderWidth / 2) {
        this.handelSlider("back", this.support.categoryHelp[this.supportActivatedItem[0]].helps[this.supportActivatedItem[1]].pic.length);
      } else {
        if(parseInt(slider.style.transform.replaceAll(/\D+/g,"")) > this.sliderWidth / 2 + this.sliderWidth *this.activeSlide) {
          this.handelSlider("next", this.support.categoryHelp[this.supportActivatedItem[0]].helps[this.supportActivatedItem[1]].pic.length);
        } else {
          slider.style.transform = 'translateX('+ (this.activeSlide * this.sliderWidth) + 'px)';
        }
      }
      this.dragAllowed = false;
    }
  }
}
