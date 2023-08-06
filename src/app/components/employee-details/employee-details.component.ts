
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeecode!: string;
  employee!: Employee;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.employee = new Employee();
    this.employeecode = this.route.snapshot.params['employeecode'];

    this.employeeService.getEmployee(this.employeecode)
      .subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
  }

  public employeesList() {
    this.router.navigate(['employees']);
  }


  


}
