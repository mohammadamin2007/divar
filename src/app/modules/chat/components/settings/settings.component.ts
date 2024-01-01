import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  @Output('closeEvent') closeEvent: EventEmitter<string> = new EventEmitter<string>()
  formGroup: FormGroup
  disabledChats = true
  restrictedChats = true


  constructor() {
    this.formGroup = new FormGroup({
        name: new FormControl("", [Validators.required,Validators.pattern(/^[a-zA-Z]*$/), Validators.maxLength(20),Validators.minLength(3)])
    })
  }

  closeSettings() {
    this.closeEvent.emit("close");
  }

  saveSettings(event: MouseEvent) {
    event.preventDefault();
    if(this.formGroup.valid && this.formGroup.controls['name'].value !== '') {
      this.closeSettings();
    }
  }

}
