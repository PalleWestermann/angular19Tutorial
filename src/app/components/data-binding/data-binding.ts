import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  firstName: string = "Chetan";
  rollNo: number = 121;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter Full Name";
  div1ClassName:  string ="bg-primary";

  constructor() {
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
  }

  showWelcomeMessage() {
    alert("Welcome to Angular 20 Tutorials")
  }

  onCityChanges() {
    console.log("City Changed");
    
  }

}
