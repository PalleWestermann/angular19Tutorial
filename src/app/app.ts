import { Component } from '@angular/core';
import { NgIf } from './components/ng-if/ng-if';
import { NgFor } from "./components/ng-for/ng-for";


@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular19Tutorial';
}
