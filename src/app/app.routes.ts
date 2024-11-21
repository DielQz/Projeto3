import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CardapioCategoriaComponent } from './page/cardapio-categoria/cardapio-categoria.component';
import { CardapioProdutoComponent } from './page/cardapio-produto/cardapio-produto.component';
import { DetalhesComponent } from './page/detalhes/detalhes.component';
import { FormularioPedidoComponent } from './page/formulario-pedido/formulario-pedido.component';

export const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'cardapio/categoria', component: CardapioCategoriaComponent},
  { path: 'cardapio/produto', component: CardapioProdutoComponent},
  { path: 'detalhes', component: DetalhesComponent},
  { path: 'pedidos', component: FormularioPedidoComponent},


];
