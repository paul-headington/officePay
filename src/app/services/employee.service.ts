import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public baseUrl = "http://localhost:3000/employee";

  constructor(private httpClient: HttpClient) { }

  public getEmployees(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public getEmployee(employeecode: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${employeecode}`);
  }
}
