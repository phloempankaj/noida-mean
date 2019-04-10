import { Component } from '@angular/core';
import Employee from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Displaying Data with Angular';
  employees : Employee[] = [
    { id: 1 , name: 'pankaj', gender: 'male', city: 'delhi', salary: 14000},
    { id: 2 , name: 'priya', gender: 'female', city: 'pune', salary: 18000},
    { id: 3 , name: 'hemant', gender: 'male', city: 'kolkata', salary: 24000},
    { id: 4 , name: 'prachi', gender: 'female', city: 'noida', salary: 21000},
    { id: 5 , name: 'pankaj', gender: 'male', city: 'noida', salary: 24500},
  ];
}
