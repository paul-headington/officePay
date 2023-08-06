import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { Paypacket } from '../models/paypacket';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaypacketService {

  public baseUrl = "http://localhost:3000/paypacket";

  constructor(private httpClient: HttpClient) { }

  public getPaypackets(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public getPaypacket(id: number): Observable<Paypacket> {
    return this.httpClient.get<Paypacket>(`${this.baseUrl}/${id}`);
  }

  public updatePaypacket(id: number, data: Paypacket): Observable<Paypacket> {
    return this.httpClient
      .patch<Paypacket>(
        this.baseUrl + '/' + id,
        JSON.stringify(data)
      )
      .pipe(retry(1), catchError(this.errorHandler));
  }

  public deletePaypacket(id: number) {
    return this.httpClient
      .delete<Paypacket>(this.baseUrl + '/' + id);
  }

  // Error handling
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
