import { Routes } from '@angular/router';
import { ProductosComponent } from './paginas/productos/productos.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { HomeComponent } from './paginas/home/home.component';

export const routes: Routes = [
    {path: 'productos', component: ProductosComponent},
    {path: 'contacto', component: ContactosComponent},
    {path: 'home', component: HomeComponent}
];
