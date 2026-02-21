import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface EmployeeDetails {
  name: string;
  employeeId: string;
  department: string;
  role: string;
  email: string;
}

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {
  isEditing = false;

  employee: EmployeeDetails = {
    name: 'Alex Morgan',
    employeeId: 'EMP-2048',
    department: 'Engineering',
    role: 'Frontend Developer',
    email: 'alex.morgan@example.com'
  };

  draftEmployee: EmployeeDetails = { ...this.employee };

  onEdit(): void {
    this.draftEmployee = { ...this.employee };
    this.isEditing = true;
  }

  onSave(): void {
    this.employee = { ...this.draftEmployee };
    this.isEditing = false;
  }

  onCancel(): void {
    this.draftEmployee = { ...this.employee };
    this.isEditing = false;
  }
}
