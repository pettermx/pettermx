import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DocumentalComponent } from './components/documental/documental.component';
import { HomeComponent } from './components/home/home.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'cursos',component:CursosComponent},
  {path:'documental',component:DocumentalComponent},
  {path:'podcast',component:PodcastComponent},
  {path:'profesores',component:ProfesoresComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
