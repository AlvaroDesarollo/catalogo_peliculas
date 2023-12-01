import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [ HeaderComponent, CarruselComponent],
  exports: [ HeaderComponent, CarruselComponent],
  imports: [RouterModule, CommonModule, IonicModule],
  providers:[]
})
export class ComponentsModule {}
