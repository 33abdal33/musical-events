import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProcesarPagoComponent } from './procesar-pago/procesar-pago.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },

    {
        path: 'home',
        loadComponent: () => import('./Home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then((m) => m.RegisterComponent),
    },
    {
        path: 'selec-asientos',
        loadComponent: () => import('./selec-asientos/selec-asientos.component').then((m) => m.SelecAsientosComponent),
    },
    {
        path: 'regis-cliente',
        loadComponent: () => import('./regis-cliente/regis-cliente.component').then((m) => m.RegisClienteComponent),
    },
    {
        path: 'procesar-pago',
        loadComponent: () => import('./procesar-pago/procesar-pago.component').then((m) => m.ProcesarPagoComponent),
    },
    {
        path: 'agregar-pelicula',
        loadComponent: () => import('./agregar-pelicula/agregar-pelicula.component').then((m) => m.AgregarPeliculaComponent),

    },

];
