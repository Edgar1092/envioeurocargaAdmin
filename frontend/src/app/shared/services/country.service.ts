import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  country$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get() {
    let parseParams = new HttpParams();
    this.http
      .get<any[]>(`countries`)
      .subscribe(country => {
        this.country$.next(country);
        
      });
  }

  show(index: number) {
    return this.http.get(`clients/${index}`);
  }

}
