import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Component } from '../models/component';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  public baseUrl = "http://localhost:3000/component";

  constructor(private httpClient: HttpClient) { }

  public getComponents(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public getComponent(code: string): Observable<Component> {
    return this.httpClient.get<Component>(`${this.baseUrl}/${code}`);
  }
}
