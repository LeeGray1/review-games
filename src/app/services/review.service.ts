import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { IReview } from '../interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private dataUri = 'http://localhost:3000/reviews'
  

  constructor(private http: HttpClient) { }

  addReview(review: IReview): Observable<IReview>{
    console.log("review added");
    return this.http.post<IReview>(this.dataUri, review)
    
    .pipe(
      catchError(this.handleError)
    )
  }

  updateReview(id:string, review:IReview):Observable<IReview>{
    let reviewURI:string = this.dataUri+ '/'+ id;
    return this.http.put<IReview>(reviewURI,review)
    .pipe(
      catchError(this.handleError)
    )
  }
  deleteReview(id:string,review:IReview):Observable<IReview>{
    let reviewURi:string = this.dataUri+'/'+id;
    return this.http.delete<IReview>(reviewURi) 
  }

  getreview(): Observable<IReview[]> {
    console.log(" get review called");

    return this.http.get<IReview[]>(`${this.dataUri}`)
    
  }
  //taken from: https://angular.io/guide/http

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  

}
