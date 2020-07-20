import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(private http: HttpClient) {}

  add(file: any) {
    return this.http.post(`files`, file);
  }

  download(name) {
    // Para Probar
    this.http
      .get(`files/download/${name}`, { responseType: 'blob' })
      .subscribe(file => {
        FileSaver.saveAs(file, name);
      });
  }

  delete(name: string) {
    return this.http.delete(`files/destroy/${name}`);
  }
}
