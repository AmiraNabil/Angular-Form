import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { error } from 'console';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  // originalUserSettings: UserSettings = {
  //   name: 'Full Name',
  //   check: true,
  //   exampleRadios: 'Light',
  //   select : "Monthly",
  //   textArea: "textarea words"
  // }
  originalUserSettings: UserSettings = {
    name: null,
    check: null,
    exampleRadios: null,
    select : null,
    textArea: null
  }

  userSettings: UserSettings = { ...this.originalUserSettings}
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log('form', form.valid)
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('success', result),
      error => console.log('error', error)
    )
  }

  onBlur(nameField: NgModel){
    console.log('blur', nameField.valid)
  }
}
