import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio-categoria',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './cardapio-categoria.component.html',
  styleUrl: './cardapio-categoria.component.css'
})
export class CardapioCategoriaComponent {

  constructor(private router:Router) {}

  click() {
    this.router.navigate(['/cardapio/produto'])
  }
}
