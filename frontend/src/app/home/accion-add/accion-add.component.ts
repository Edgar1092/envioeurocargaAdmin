import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RolesService } from 'app/shared/services/roles.service';
import { Observable, BehaviorSubject, of,from } from 'rxjs';
import { AccionService } from 'app/shared/services/accion.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import swal from 'sweetalert2';




@Component({
  selector: 'app-accion-add',
  templateUrl: './accion-add.component.html',
  styleUrls: ['./accion-add.component.scss']
})
export class AccionAddComponent implements OnInit {
  ruta = environment.apiBase+"/storage/app/public/archivos/"
  formBlog: FormGroup;
  page=1;
  per_page=30;
  blogToEdit$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  clients: Observable<any>;
  imagen
  nombreImagen
  urlImagen
 idUser;
 usuarios;
 isResize1=false;
 editar=0;
 filesSelect:any = []
 clientSelectConfig = {
  searchPlaceholder: 'Buscar',
  noResultsFound: 'Sin resultados',
  placeholder: 'Seleccionar',
  displayKey: 'name',
  searchOnKey: 'name',
  search: true,
  moreText: 'más'
};
archivos = []
listaOrden = []
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
      id: [''],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      desde: ['', Validators.required],
      hasta: ['', Validators.required],
      status: [0],
      usuario_id: ['', Validators.required],
      archivo:[''],
      tiempo:[2],
      tipoTiempo:['s'],
      orden:['']

    });
   }

  ngOnInit() {
   this.datainicial();
   this.obtenerUsuarios();
}

datainicial(){
  this.activatedRoute.params
  .pipe(
    switchMap(params => {
      if (params['id']) {
        this.editar=1;
        return this.AccionService.show(params['id']);
      } else {
        return of(null);
      }
    })
  )
  .subscribe(user => {
    if (user) {
      console.log('usuario',user)
      this.blogToEdit$.next(user);
      this.formBlog.controls['id'].setValue(user['id']);
      this.formBlog.controls['nombre'].setValue(user['nombre']);
      this.formBlog.controls['descripcion'].setValue(user['descripcion']);
      this.formBlog.controls['desde'].setValue(user['desde']);
      this.formBlog.controls['hasta'].setValue(user['hasta']);
      this.formBlog.controls['status'].setValue(user['estatus']);
      this.formBlog.controls['usuario_id'].setValue(user['Usuario']);
      if(user['Archivo'] != ''){

        this.archivos = user['Archivo'];
        let n = user['Archivo'].length +1;
        this.formBlog.controls['orden'].setValue(n);
        this.listaOrden = []
        for (let index = n; index > 0; index--) {
          this.listaOrden.push(index)
          
        }
      }
      
      console.log(this.listaOrden);
    }
  });
}

obtenerUsuarios(){
  this.AccionService.usuario().subscribe((res)=>{
    console.log(res);
    this.usuarios = res;
  },(error)=>{
    console.log(error);
  })
}
  
  add() {
    console.log('entrando en el guardar',this.formBlog)
    let usuario= JSON.parse(localStorage.getItem('user'));
    this.idUser=usuario.id;
    this.formBlog.controls['id'].setValue(this.idUser);
    if (this.formBlog.valid) {
      let d = this.formBlog.value;
      let formData:FormData = new FormData();
      formData.append('nombre',this.formBlog.get('nombre').value);
      formData.append('descripcion',this.formBlog.get('descripcion').value);
      formData.append('desde',this.formBlog.get('desde').value);
      formData.append('hasta',this.formBlog.get('hasta').value);
      formData.append('status',this.formBlog.get('status').value);
      formData.append('archivos',JSON.stringify(this.filesSelect));
      formData.append('usuario_id',JSON.stringify(this.formBlog.get('usuario_id').value));
      this.AccionService.add(formData).subscribe(response => {
        if (response) {
          
          this.toast.success(response['message']);
          this.router.navigate(['/home/accion/list']);
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

  edit() {
 
    if (this.formBlog.valid) {
      let d = this.formBlog.value;
      let formData:FormData = new FormData();
      formData.append('id',this.formBlog.get('id').value);
      formData.append('nombre',this.formBlog.get('nombre').value);
      formData.append('descripcion',this.formBlog.get('descripcion').value);
      formData.append('desde',this.formBlog.get('desde').value);
      formData.append('hasta',this.formBlog.get('hasta').value);
      formData.append('status',this.formBlog.get('status').value);
      formData.append('archivos',JSON.stringify(this.filesSelect));
      formData.append('usuario_id',JSON.stringify(this.formBlog.get('usuario_id').value));
      this.AccionService.edit(formData).subscribe(response => {
        if (response) {
          
          this.toast.success(response['message']);
          this.router.navigate(['/home/accion/list']);
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

  onFileChange(event) {
    const reader = new FileReader();
    let fileList: FileList = event.target.files;
    let uploadedImage: Blob;
 
    if(event.target.files && event.target.files.length) {
      
      const [file2] = event.target.files;
      let file: File = fileList[0];
      this.isResize1 =true;
      reader.readAsDataURL(file2);
      // console.log(file2);
        reader.onload = () => {
            
            this.imagen = reader.result;
            this.nombreImagen = file.name;
            var res = this.imagen.split(",");
            var tipoAr = 0
            if(file.type == "video/mp4"){
              tipoAr = 1
            }
            this.filesSelect.push({nombre:this.nombreImagen,
              imagen_guardar:res[1],
              imagen_mostrar:this.imagen,
              tipo:tipoAr,
              tiempo:this.formBlog.get('tiempo').value,
              tipoTiempo:this.formBlog.get('tipoTiempo').value,
              orden:this.formBlog.get('orden').value
            });
            let n = this.listaOrden.length +1;
            this.formBlog.controls['orden'].setValue(n);
            this.listaOrden= []
            for (let index = n; index > 0; index--) {
              this.listaOrden.push(index)
              
            }
            
            console.log(this.filesSelect)
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
        };
        this.formBlog.controls['archivo'].setValue('');
        this.isResize1 =false;  
    }
  }

  del(id){
    let orSelect = this.filesSelect[id].orden
    console.log("SS=>",orSelect)
    this.filesSelect.forEach((element,index)=> {
      if(element.orden > orSelect ){
        this.filesSelect[index].orden = element.orden-1
      }
    });
    this.filesSelect.splice(id, 1);
    let fs = this.filesSelect.length;
    let n = (this.archivos.length+1)+fs;
    this.formBlog.controls['orden'].setValue(n);
    this.listaOrden = []
    for (let index = n; index > 0; index--){
      this.listaOrden.push(index)
    }
    
    console.log(this.filesSelect);
  }

  borrar(blog: any) {
    const confirm = swal.fire({
      title: `¿Desea borrar el archivo?`,
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
        this.AccionService.borrar(blog.id).subscribe(response => {
          if (response) {
            this.toast.success(response['message']);
            this.datainicial()
          } else {
            this.toast.error(JSON.stringify(response));
          }
        });
      }
    });
  }

  clientSelected(client) {
    if (client) {
      console.log('aqui va cilente',JSON.parse(JSON.stringify(client)))
      this.formBlog.controls['usuario_id'].setValue(client);
    } else {
      this.formBlog.controls['usuario_id'].setValue('');
    }
  }
  ordenUpNew(im,pos){
    let posUp = pos+1
    this.filesSelect[pos].orden = im.orden +1;
    this.filesSelect[posUp].orden = this.filesSelect[posUp].orden-1;
    this.filesSelect.sort(function (a, b) {
      if (a.orden > b.orden) {
        return 1;
      }
      if (a.orden < b.orden) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log(this.filesSelect);
  }
  ordenDownNew(im,pos){
    let posDown = pos-1
    this.filesSelect[pos].orden = im.orden -1;
    this.filesSelect[posDown].orden = this.filesSelect[posDown].orden +1;
    this.filesSelect.sort(function (a, b) {
      if (a.orden > b.orden) {
        return 1;
      }
      if (a.orden < b.orden) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log(this.filesSelect);
  }
  ordenUpOld(im,pos){
    console.log(im,pos)
    let posUp = pos+1
    let params = {
      idUno : this.archivos[pos].id,
      idDos : this.archivos[posUp].id,
      ordenUno : im.orden +1,
      ordenDos : this.archivos[posUp].orden -1
    }
    this.AccionService.updateOrdenArchivo(params).subscribe((res)=>{
      this.archivos[pos].orden = im.orden +1;
      this.archivos[posUp].orden = this.archivos[posUp].orden -1;
      this.archivos.sort(function (a, b) {
        if (a.orden > b.orden) {
          return 1;
        }
        if (a.orden < b.orden) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      this.datainicial();
      console.log(this.archivos);
    },(error)=>{
      console.log(error)
    });

  }
  ordenDownOld(im,pos){

    let posDown = pos-1
    let params = {
      idUno : this.archivos[pos].id,
      idDos : this.archivos[posDown].id,
      ordenUno : im.orden -1,
      ordenDos : this.archivos[posDown].orden +1
    }
    this.AccionService.updateOrdenArchivo(params).subscribe((res)=>{
      this.archivos[pos].orden = im.orden -1;
      this.archivos[posDown].orden = this.archivos[posDown].orden +1;
      this.archivos.sort(function (a, b) {
        if (a.orden > b.orden) {
          return 1;
        }
        if (a.orden < b.orden) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      this.datainicial();
      console.log(this.archivos);
    },(error)=>{
      console.log(error)
    });
  }

}
