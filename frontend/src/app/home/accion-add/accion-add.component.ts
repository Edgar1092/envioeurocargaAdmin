import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RolesService } from 'app/shared/services/roles.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { AccionService } from 'app/shared/services/accion.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-accion-add',
  templateUrl: './accion-add.component.html',
  styleUrls: ['./accion-add.component.scss']
})
export class AccionAddComponent implements OnInit {
  formBlog: FormGroup;
  page=1;
  per_page=30;
  blogToEdit$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  imagen
  nombreImagen
  urlImagen
 idUser;

  constructor(
    private fb: FormBuilder,
    private rolesService: RolesService,
    private AccionService: AccionService,
    private toast: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef,
  ) {
    this.formBlog = this.fb.group({
      idUsuarioFk: [''],
      referenciaPago: ['', Validators.required],

    });
   }

  ngOnInit() {}
  add() {
    let usuario= JSON.parse(localStorage.getItem('user'));
    this.idUser=usuario.id;
    this.formBlog.controls['idUsuarioFk'].setValue(this.idUser);
    if (this.formBlog.valid) {
      let d = this.formBlog.value;
 
      this.AccionService.add(this.formBlog.value).subscribe(response => {
        if (response) {
          
          this.toast.success(response['message']);
          this.router.navigate(['/home']);
        } else {
          this.toast.error(JSON.stringify(response));
        }
      },(error)=>
      {
        let mensaje =error.error.errors;
        Object.keys(mensaje).forEach(key => {
          console.log(key)
          this.toast.error(mensaje[key][0]);
          console.log(mensaje[key][0])
         });
      });
    }
  }

  aprobar() {
    if (this.formBlog.valid) {
      let d = this.formBlog.value;
  
      this.AccionService.aprobar(this.formBlog.value).subscribe(response => {
        if (response) {
          this.toast.success(response['message']);
          this.router.navigate(['/admin/parascore/list']);
        } else {
          this.toast.error(JSON.stringify(response));
        }
      });
    }
    // console.log(this.formBlog.value);
  }


}
