import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/shared/services/users.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
users$: Observable<any[]>;
codigoReferido;
contadorReferidos;
Patrocinador;
posicion;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    let usuario= JSON.parse(localStorage.getItem('user'));
    this.codigoReferido=usuario.link;
    this.posicion=usuario.posicion;
    this.obtenerReferidos(usuario.id)
    this.obtenerPatrocinador(usuario.idReferido)
  }

  obtenerReferidos(idLogeado){
    
    this.contadorReferidos=this.userService.countReferidos(idLogeado);


    this.userService.countReferidos(idLogeado).subscribe((res)=>{
      console.log(res);
       this.contadorReferidos = JSON.parse(JSON.stringify(res)).conteoReferidos;

    },(error)=>{
      console.log(error);
    })
  
  }
  obtenerPatrocinador(idLogeado){

  
    this.userService.obtenerPatrocinador(idLogeado).subscribe((res)=>{
      console.log(res);
       this.Patrocinador = JSON.parse(JSON.stringify(res)).patrocinador;

    },(error)=>{
      console.log(error);
    })
    
    // this.contadorReferidos=this.userService.countReferidos(idLogeado);
  
  }

  // pregunta(){
  
  //   this.BlogService.GetPreguntas().subscribe((res)=>{
  //     console.log(res);
  //     this.preguntas = res.blog;

  //   },(error)=>{
  //     console.log(error);
  //   })
  // }

}
