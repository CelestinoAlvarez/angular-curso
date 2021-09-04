import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes:string[]=["Batman","Ironman","Spiderman"]
  heroesBorrados:string[]=[];

  borrarHeroe(){
    this.heroesBorrados.push(this.heroes.pop()!);
  }

}
