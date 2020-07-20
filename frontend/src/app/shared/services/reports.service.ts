import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { FilesService } from './files.service';
import * as Moment from 'moment';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(private http: HttpClient, private fileService: FilesService) {}

  timePerUserGraph(params: {
    office_id: string;
    since?: string;
    until?: string;
  }) {
    let parseParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(p => {
      if (params[p]) {
        parseParams = parseParams.append(p, params[p]);
      }
    });
    return this.http.get(`reports/graph_time_per_user`, {
      params: parseParams
    });
  }

  timePerUser(params: { office_id: string; since?: string; until?: string }) {
    let parseParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(p => {
      if (params[p]) {
        parseParams = parseParams.append(p, params[p]);
      }
    });
    return this.http.get(`reports/time_per_user`, { params: parseParams });
  }

  timePerClientGraph(params: {
    office_id: string;
    since?: string;
    until?: string;
  }) {
    let parseParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(p => {
      if (params[p]) {
        parseParams = parseParams.append(p, params[p]);
      }
    });
    return this.http.get(`dashboard/propoals_graphs`, {
      params: parseParams
    });
  }

  goalsGraph(params) {
    let parseParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(p => {
      if (params[p]) {
        if(p == 'users'){
          // params[p].forEach(r =>{
            parseParams = parseParams.append('users[]', params[p]);
          // })
        }else{
          parseParams = parseParams.append(p, params[p]);
        }
      }
    });
    return this.http.get(`dashboard/goals_graphs`, {
      params: parseParams
    });
  }

  timePerClient(params: { office_id: string; since?: string; until?: string }) {
    let parseParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(p => {
      if (params[p]) {
        parseParams = parseParams.append(p, params[p]);
      }
    });
    return this.http.get(`reports/time_per_client`, { params: parseParams });
  }

  servicePerClientReport(params: {

    format: 'excel' | 'pdf';
    since?: string;
    until?: string;
  }) {

    this.http
      .get(`reports/sales`, { params, responseType: 'blob' })
      .subscribe(response => {
        saveAs(
          response,
          `sales_${Moment().unix()}.${
            params.format === 'excel' ? 'xls' : 'pdf'
          }`
        );
      });
  }
  servicePerClientReport2(params: {

    format: 'excel' | 'pdf';
    since?: string;
    until?: string;
    client_id?: any;
  }) {
    let parseParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(p => {
      if (params[p]) {
        if(p == 'client_id'){
          params[p].forEach(r =>{
            parseParams = parseParams.append('client_id[]', r);
          })
        }else{
          parseParams = parseParams.append(p, params[p]);
        }
      }
    });
    
    this.http
      .get(`reports/client_quotations`, { params: parseParams, responseType: 'blob' })
      .subscribe(response => {
        saveAs(
          response,
          `client_quotations_${Moment().unix()}.${
            params.format === 'excel' ? 'xls' : 'pdf'
          }`
        );
      });
  }
  servicePerUserReport(params: {
    user_id: string;
    format: 'excel' | 'pdf';
    office_id: string;
    since?: string;
    until?: string;
  }) {
    this.http
      .get(`reports/services_per_user`, { params, responseType: 'blob' })
      .subscribe(response => {
        saveAs(
          response,
          `services_per_user${Moment().unix()}.${
            params.format === 'excel' ? 'xls' : 'pdf'
          }`
        );
      });
  }

  SalesYearGraph(params: {
    office_id: string;
    since?: string;
    until?: string;
  }) {
    let parseParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(p => {
      if (params[p]) {
        parseParams = parseParams.append(p, params[p]);
      }
    });
    return this.http.get(`dashboard/graph_sales_year`, {
      params: parseParams
    });
  }
  SalesMonth(params: {
    office_id: string;
    since?: string;
    until?: string;
  }) {
    let parseParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(p => {
      if (params[p]) {
        parseParams = parseParams.append(p, params[p]);
      }
    });
    return this.http.get(`dashboard/approved_sales_month`, {
      params: parseParams
    });
  }
  TaskOpen(params: {
    office_id: string;
    since?: string;
    until?: string;
  }) {
    let parseParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(p => {
      if (params[p]) {
        parseParams = parseParams.append(p, params[p]);
      }
    });
    return this.http.get(`dashboard/tasks_opens`, {
      params: parseParams
    });
  }
}
