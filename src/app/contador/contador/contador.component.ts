import{Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
    <h1 style="text-align: center;">{{title}}</h1>
    <br>
    <br>
    <div style="text-align: center; font-size: 20px;">
    <h3>La base es : <strong>{{base}}</strong></h3>
    <button (click)="modificar(-base)">-{{base}}</button>

    <span style="border:solid 2px;">{{numero}}</span>

    <button (click)="modificar(base)">+{{base}}</button>
    </div>
    
    `   
})

export class ContadorComponent
{
    title = 'Contador App';

    numero:number=10;
    base:number=5;

    modificar(valor:number){
        this.numero+=valor;
      }
}