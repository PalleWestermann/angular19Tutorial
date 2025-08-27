import { Component } from '@angular/core';
import { DataBinding } from "./components/data-binding/data-binding";
import { NgIf } from "./components/ng-if/ng-if";

@Component({
  selector: 'app-root',
  imports: [NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular19Tutorial';
}
