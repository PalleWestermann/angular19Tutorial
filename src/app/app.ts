import { Component } from '@angular/core';
import { NgStyle } from "./components/ng-style/ng-style";


@Component({
  selector: 'app-root',
  imports: [NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular19Tutorial';
}
