import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CrearPComponent } from './modals/crear-p/crear-p.component';
import { DetalleComponent } from './modals/detalle/detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ HeaderComponent, CarruselComponent, CrearPComponent, DetalleComponent],
  exports: [ HeaderComponent, CarruselComponent,  DetalleComponent],
  imports: [RouterModule, CommonModule, IonicModule, FormsModule,ReactiveFormsModule],
  providers:[]
})
export class ComponentsModule {}
