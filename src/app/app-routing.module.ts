import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SoporteComponent } from './components/soporte/soporte.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{ path:'signin', component: SigninComponent },
{ path:'signup', component: SignupComponent },
{ path:'producto/:id', component: ProductoComponent },
{ path: 'acerca-de', component: AcercaDeComponent},
{ path: 'contacto', component: ContactoComponent},
{ path: 'soporte', component: SoporteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
