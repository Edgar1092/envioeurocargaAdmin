import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AccionService } from 'app/shared/services/accion.service';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-accion-list',
  templateUrl: './accion-list.component.html',
  styleUrls: ['./accion-list.component.scss']
})
export class AccionListComponent implements OnInit {

  blogs$: Observable<any[]>;
  total = 0;
  p=1;
  itemsPerPage = 5;
  formBlog: FormGroup;
  constructor(private AccionService: AccionService, private toast: ToastrService, 
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,) {
    this.blogs$ = this.AccionService.blogs$;

    this.formBlog = this.fb.group({
      id: [''],
      idUsuarioFk: [''],
      estatus: [''],

    });
  }

  ngOnInit() {
    let param;
    if(this.p)
      { 
        param={page:this.p,per_page:this.itemsPerPage};
      }else{
        param={page:1,per_page:this.itemsPerPage};
      }
      this.loadInitialData(param);
  }

  eliminar(blog: any) {
    const confirm = swal.fire({
      title: `Borrar la lista ${blog.nombre}`,
      text: 'Esta acción no se puede deshacer',
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Borrar',
      focusCancel: true
    });

    from(confirm).subscribe(r => {
      if (r['value']) {
        this.AccionService.delete(blog.id).subscribe(response => {
          if (response) {
            this.toast.success(response['message']);
            let param;
            if(this.p)
              { 
                param={page:this.p,per_page:this.itemsPerPage};
              }else{
                param={page:1,per_page:this.itemsPerPage};
              }
              this.loadInitialData(param);
          } else {
            this.toast.error(JSON.stringify(response));
          }
        });
      }
    });
  }

  activar(blog: any) {
    const confirm = swal.fire({
      title: `Desea activar la lista ${blog.nombre}`,
      text: 'Esta acción no se puede deshacer',
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Activar',
      focusCancel: true
    });

    from(confirm).subscribe(r => {
      if (r['value']) {
        this.AccionService.activarInactivar({id:blog.id,status:1}).subscribe(response => {
          if (response) {
            this.toast.success(response['message']);
            let param;
            if(this.p)
              { 
                param={page:this.p,per_page:this.itemsPerPage};
              }else{
                param={page:1,per_page:this.itemsPerPage};
              }
              this.loadInitialData(param);
          } else {
            this.toast.error(JSON.stringify(response));
          }
        });
      }
    });
  }

  inactivar(blog: any) {
    const confirm = swal.fire({
      title: `Desea inactivar la lista ${blog.nombre}`,
      text: 'Esta acción no se puede deshacer',
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Inactivar',
      focusCancel: true
    });

    from(confirm).subscribe(r => {
      if (r['value']) {
        this.AccionService.activarInactivar({id:blog.id,status:0}).subscribe(response => {
          if (response) {
            this.toast.success(response['message']);
            let param;
            if(this.p)
              { 
                param={page:this.p,per_page:this.itemsPerPage};
              }else{
                param={page:1,per_page:this.itemsPerPage};
              }
              this.loadInitialData(param);
          } else {
            this.toast.error(JSON.stringify(response));
          }
        });
      }
    });
  }

  // joinData(data: string[]): string {
  //   return data.map(o => o['name']).join(', ');
  // }

  loadInitialData(params){
    this.AccionService.get(params);
  }

  onFilter(filterParams) {
    this.AccionService.get(filterParams);
  }

  perPage(itemsPerPage,page){
    this.p = page;
    this.itemsPerPage = itemsPerPage;
    let param={page:this.p,per_page:this.itemsPerPage};
    this.loadInitialData(param);

  }

  // aprobar(infor) {
  //   this.formBlog.controls['idUsuarioFk'].setValue(infor.idUsuarioFk);
  //   this.formBlog.controls['id'].setValue(infor.id);
  //   this.formBlog.controls['estatus'].setValue('aprobado');
  //   // console.log(infor)
  //   if (this.formBlog.valid) {
  //     let d = this.formBlog.value;
  
  //     this.AccionService.aprobar(this.formBlog.value).subscribe(response => {
  //       if (response) {
  //         this.toast.success("Pago aprobado");
  //         this.AccionService.get();
  //       } else {
  //         this.toast.error(JSON.stringify(response));
  //       }
  //     });
  //   }
  //   // console.log(this.formBlog.value);
  // }

  // rechazar(infor) {
  //   this.formBlog.controls['idUsuarioFk'].setValue(infor.idUsuarioFk);
  //   this.formBlog.controls['id'].setValue(infor.id);
  //   this.formBlog.controls['estatus'].setValue('rechazado');
  //   if (this.formBlog.valid) {
  //     let d = this.formBlog.value;
  
  //     this.AccionService.aprobar(this.formBlog.value).subscribe(response => {
  //       if (response) {
  //         this.toast.success("Pago rechazado");
  //         this.AccionService.get();
  //       } else {
  //         this.toast.error(JSON.stringify(response));
  //       }
  //     });
  //   }
  //   // console.log(this.formBlog.value);
  // }

}
