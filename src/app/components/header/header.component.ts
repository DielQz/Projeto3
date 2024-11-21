import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  items = [
    { id: 1, label: 'Início', route: '/' },
    { id: 2, label: 'Categoria', route: '/cardapio/categoria' },
    { id: 3, label: 'Cardápio', route: '/cardapio' },
    { id: 4, label: 'Localização', route: '/localizacao' },
    { id: 5, label: 'Contato', route: '/contato' }
  ];

  constructor(private router: Router) {}

  // Função para navegar com base no item clicado
  navigate(item: { id: number; route: string }) {
    switch (item.id) {
      case 1: // Redireciona para Home
        this.router.navigate([item.route]);
        break;
      case 2: // Redireciona para Perfil
        this.router.navigate([item.route]);
        break;
      case 3: // Redireciona para Configurações
        this.router.navigate([item.route]);
        break;
      case 4: // Redireciona para Ajuda
        this.router.navigate([item.route]);
        break;
      default: // Rota padrão
        this.router.navigate(['/not-found']);
        break;
    }
  }
}
