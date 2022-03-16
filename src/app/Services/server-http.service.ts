import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Sanpham } from '../models/Sanpham';



@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  private REST_API_SERVER = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
      // Authorization: 'Basic ' + btoa('username:password'),
    }),
  };
  public getSanpham() {
    const url = `${this.REST_API_SERVER}/sanpham`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getSanphams(sanphamId: number) {
    const url = `${this.REST_API_SERVER}/sanpham/` + sanphamId;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public addSanpham(data: Sanpham) {
    const url = `${this.REST_API_SERVER}/sanpham`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public modifySanpham(sanphamId: number, data: Sanpham) {
    const url = `${this.REST_API_SERVER}/sanpham/` + sanphamId;
    return this.httpClient
      .put<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deleteSanpham(sanphamId: number) {
    const url = `${this.REST_API_SERVER}/sanpham/` + sanphamId;
    return this.httpClient
      .delete<any>(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}