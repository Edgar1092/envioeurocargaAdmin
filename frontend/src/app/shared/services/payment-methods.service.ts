import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {
  paymentMethods$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) { }
   
  get() {
    this.http
      .get<any[]>(`payment_methods`)
      .subscribe(paymentMethods => {
        this.paymentMethods$.next(paymentMethods);
      });
  }

  show(index: number) {
    return this.http.get(`payment_methods/${index}`);
  }

}
