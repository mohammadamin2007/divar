import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss']
})
export class MyPostComponent {
  constructor(private titleService: Title) {
    titleService.setTitle("دیوار من: آخرین بازدید ها، آگهی های نشان شده و شخصی شما");
  }
}
