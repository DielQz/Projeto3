import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router) {}

  pedido() {
    this.router.navigate(['/pedidos'])
  }

  cardapio() {
    this.router.navigate(['/cardapio/categoria'])
  }

}
