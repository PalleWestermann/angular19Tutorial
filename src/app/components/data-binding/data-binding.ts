import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
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
  selectedCity: string = "";

  constructor(private router: Router) {
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
  navigateToAdmin() {
    this.router.navigateByUrl("/admin");
  }
}
