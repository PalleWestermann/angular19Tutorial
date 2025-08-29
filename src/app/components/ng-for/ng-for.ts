import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css'
})
export class NgFor {
  cityList: string[] = ["Pune","Nagpur","Jaipur","Mumbai","Thane"];

  employeeArray: any[] = [
    {empId: 121, name:'AAA',city:'Pune',contactNo:'999889988'},
    {empId: 122, name:'BBB',city:'Nagpur',contactNo:'11111111'},
    {empId: 123, name:'ccc',city:'Jaipur',contactNo:'22222222'},
    {empId: 124, name:'DDD',city:'Pune',contactNo:'33333333'},
    {empId: 125, name:'EEE',city:'Thane',contactNo:'44444'},
  ]
}
