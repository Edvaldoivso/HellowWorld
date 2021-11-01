import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  nomePortal : String ;

  //Diretiva

  cursos:string[] = ['Java','Angular','Ext JS']


  constructor() { 
    this.nomePortal = 'http://edvaldo.Banco';
  }

  ngOnInit(): void {
  }

}
