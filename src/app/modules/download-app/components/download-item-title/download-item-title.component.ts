import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-item-title',
  templateUrl: './download-item-title.component.html',
  styleUrls: ['./download-item-title.component.scss']
})
export class DownloadItemTitleComponent {
  @Input('downloadItem') downloadItem: {text: boolean, image: string, textContent: string, textIcon: string}
  
}
