import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaListComponent } from './pages/categoria-list/categoria-list.component';
import { CategoriaUpdateComponent } from './pages/categoria-update/categoria-update.component';
import { CategoriaCreateComponent } from './pages/categoria-create/categoria-create.component';
import { DocenteListComponent } from './pages/docente-list/docente-list.component';
import { DocenteUpdateComponent } from './pages/docente-update/docente-update.component';
import { DocenteCreateComponent } from './pages/docente-create/docente-create.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaListComponent,
    CategoriaUpdateComponent,
    CategoriaCreateComponent,
    DocenteListComponent,
    DocenteUpdateComponent,
    DocenteCreateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
