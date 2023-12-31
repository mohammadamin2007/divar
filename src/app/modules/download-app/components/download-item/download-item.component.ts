import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-item',
  templateUrl: './download-item.component.html',
  styleUrls: ['./download-item.component.scss']
})
export class DownloadItemComponent {
  @Input('data') download: {type: string, images: {text: boolean, image: string, textContent: string, textIcon: string, link: string}[]}
}
