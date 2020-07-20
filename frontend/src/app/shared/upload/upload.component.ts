import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { environment } from 'environments/environment';
import { AuthService } from '../auth/auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @Output('onAddItem') onAddItem: EventEmitter<any> = new EventEmitter();
  public itemsUploaded: any[] = [];
  public uploader: FileUploader = new FileUploader({
    url: environment.apiUrl + '/files', // URL de la API!
    authToken: `Bearer ${this.auth.getToken()}`,
    disableMultipart: false,
    removeAfterUpload: true
  });
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  constructor(
    private auth: AuthService,
    private activeModal: NgbActiveModal,
    private uploadService: UploadService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.uploader.onBuildItemForm = (fileItem: FileItem, form: FormData) => {
      form.append('file', fileItem.file.rawFile, fileItem.file.name);
    };
    this.uploader.onBeforeUploadItem = item => {
      item.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item, response, status, headers) => {
      if (status === 200) {
        const responseParsed = JSON.parse(response);
        let f = {name_file:responseParsed.data.name, file_id:responseParsed.data.id};
        this.itemsUploaded.push(f);
        this.onAddItem.emit(this.itemsUploaded);
        console.log("Items", this.itemsUploaded);
      } else {
        console.error(status);
        console.log(item);
        console.log(headers);
      }
    };
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  close() {
    this.modalService.dismissAll();
  }

  deleteItem(name: string) {
    this.uploadService.delete(name).subscribe(response => {
      this.itemsUploaded = [];
    });
  }
}
