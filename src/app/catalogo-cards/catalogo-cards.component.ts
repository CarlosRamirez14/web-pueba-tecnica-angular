import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-cards',
  templateUrl: './catalogo-cards.component.html',
  styleUrls: ['./catalogo-cards.component.css']
})
export class CatalogoCardsComponent{

  constructor(private router: Router) { }

  navegar(){
    this.router.navigate(['/detalle']);
  }

}
