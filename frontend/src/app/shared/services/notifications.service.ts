import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifications$: Observable<any>;
  constructor(private http: HttpClient) {}

  get(params?: {
    limit?: number;
    offset?: number;
    text?: string;
    user_id?: any;
    order_by?: 'title' | 'body' | 'created_at';
    order_type?: 'asc' | 'desc';
  }): Observable<any> {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }

    return this.http.get('notifications', { params: parseParams });
  }
}
