import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {

  constructor(private router:Router) {}

  click() {
    this.router.navigate(['/pedidos'])
  }
}
