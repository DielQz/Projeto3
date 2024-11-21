import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio-produto',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './cardapio-produto.component.html',
  styleUrl: './cardapio-produto.component.css'
})
export class CardapioProdutoComponent {

  constructor(private router:Router) {}

  click() {
    this.router.navigate(['/pedidos'])
  }
}
