import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError , filter  } from 'rxjs/operators';
import { of, Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductQuotesService {

  constructor(private httpClient: HttpClient) { }

  silderValue$: Subject<number> = new BehaviorSubject(50);

  getProductQuotes(): Observable<Array<any>> {
    return this.httpClient.get('https://98b389d9-3f2c-431e-92a6-4fd9a942a8ef.mock.pstmn.io/quote')
    .pipe(
      map((response: any) => response.data.quotes.product_quotes ) ,
    catchError( (error) => of('error in calling getProductQuotes api' , error  ) ) );
  }
}
