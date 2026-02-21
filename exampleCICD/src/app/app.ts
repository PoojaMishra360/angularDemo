import { Component } from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeDetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
