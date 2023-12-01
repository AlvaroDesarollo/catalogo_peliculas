import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICarrusel } from 'src/app/models/carrusel.model';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
})
export class CarruselComponent  implements OnInit {

  @Input()dataImagen: ICarrusel[] = [];
  @Output()imagenSelect: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('Carrusel')
  }
  selectImagen(i: number): void {
    console.log('Click Imagen', this.dataImagen[i].id);
    this.imagenSelect.emit(this.dataImagen[i].id);
  }

}
