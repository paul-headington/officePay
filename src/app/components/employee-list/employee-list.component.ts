
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService, 
    private router: Router,
  ) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    })
  }

  employeeDetails(employeecode: string) {
    this.router.navigate(['employees', employeecode]);
  }
}
