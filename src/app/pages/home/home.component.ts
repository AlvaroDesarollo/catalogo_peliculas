import { Component, OnInit } from '@angular/core';
import { ICarrusel } from 'src/app/models/carrusel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public titulo: string = '';
  public imagenesCarrusel: ICarrusel[] = [];

  constructor() {}

  ngOnInit() {
    this.titulo = 'Home';
    this.setImagenesCarrusel();
  }

  setImagenesCarrusel() {
    const carrusel: ICarrusel[] = [
      {
        detalleImage: 'imagen1',
        url: 'https://media.istockphoto.com/id/1416933841/photo/dune-landscape.jpg?s=1024x1024&w=is&k=20&c=r2qnb3siuZVR99e6s3t7qYro6IZp9T9p8L1JXSWTqn4=',
        id: '1',
      },
      {
        detalleImage: 'imagen2',
        url: 'https://media.istockphoto.com/id/1416933841/photo/dune-landscape.jpg?s=1024x1024&w=is&k=20&c=r2qnb3siuZVR99e6s3t7qYro6IZp9T9p8L1JXSWTqn4=',
        id: '2',
      },
      {
        detalleImage: 'imagen3',
        url: 'https://media.istockphoto.com/id/1416933841/photo/dune-landscape.jpg?s=1024x1024&w=is&k=20&c=r2qnb3siuZVR99e6s3t7qYro6IZp9T9p8L1JXSWTqn4=',
        id: '3',
      },
      {
        detalleImage: 'imagen4',
        url: 'https://media.istockphoto.com/id/1416933841/photo/dune-landscape.jpg?s=1024x1024&w=is&k=20&c=r2qnb3siuZVR99e6s3t7qYro6IZp9T9p8L1JXSWTqn4=',
        id: '4',
      },
      {
        detalleImage: 'imagen5',
        url: 'https://media.istockphoto.com/id/1416933841/photo/dune-landscape.jpg?s=1024x1024&w=is&k=20&c=r2qnb3siuZVR99e6s3t7qYro6IZp9T9p8L1JXSWTqn4=',
        id: '5',
      },
      {
        detalleImage: 'imagen6',
        url: 'https://media.istockphoto.com/id/1416933841/photo/dune-landscape.jpg?s=1024x1024&w=is&k=20&c=r2qnb3siuZVR99e6s3t7qYro6IZp9T9p8L1JXSWTqn4=',
        id: '6',
      },
    ];

    this.imagenesCarrusel = carrusel;
  }

  detallePelicula(id: string){
    console.log('detallePelicula', id);

  }
}
