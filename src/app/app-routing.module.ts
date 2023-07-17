import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { CatalogoCardsComponent } from './catalogo-cards/catalogo-cards.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

// Rutas de navegacion
const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'navmenu', component: NavmenuComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'catalogo', component: CatalogoCardsComponent },
  { path: 'detalle', component: DetalleProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
