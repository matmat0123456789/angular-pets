import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//@Injectable({providedIn:'root'})
export class Service<T> {

  constructor(private http: HttpClient) { }

  getData (methodApi:string): Observable<T[]> {
    return this.http.get<T[]>(methodApi)
      .pipe(
       // tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getTableData', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error("Something gone wrong: "+error); // log to console instead

      // TODO: better job of transforming error for user consumption
     // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}