import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
premiun;
  constructor() { }

  ngOnInit() {

    let usuario= JSON.parse(localStorage.getItem('user'));
    this.premiun=usuario.premiun;

    console.log('premiun',this.premiun)
  }

}
