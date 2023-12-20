import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriaCreateComponent } from './pages/categoria-create/categoria-create.component';
import { CategoriaListComponent } from './pages/categoria-list/categoria-list.component';
import { CategoriaUpdateComponent } from './pages/categoria-update/categoria-update.component';
import { DocenteCreateComponent } from './pages/docente-create/docente-create.component';
import { DocenteListComponent } from './pages/docente-list/docente-list.component';
import { DocenteUpdateComponent } from './pages/docente-update/docente-update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'categoria-create',
    component: CategoriaCreateComponent
  },
  {
    path:'categoria-list',
    component: CategoriaListComponent
  },
  {
    path:'categoria-update/:id',
    component: CategoriaUpdateComponent
  },
  {
    path:'docente-create',
    component: DocenteCreateComponent
  },
  {
    path:'docente-list',
    component: DocenteListComponent
  },
  {
    path:'docente-update/:id',
    component: DocenteUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
