import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearPComponent } from 'src/app/components/modals/crear-p/crear-p.component';
import { DetalleComponent } from 'src/app/components/modals/detalle/detalle.component';
import { ICarrusel } from 'src/app/models/carrusel.model';
import { GlobalService } from 'src/app/services/global.service';
import { PetitionsService } from 'src/app/services/petitions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public titulo: string = '';
  public imagenesCarrusel: ICarrusel[] = [];
  public peliculas: any[] = [];

  isModalOpen: boolean = false;
  show:boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private http: PetitionsService,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.titulo = 'Galería de Peliculas';
    this.http.petitionGet().subscribe(this.resultPeticion());
  }

  setImagenesCarrusel() {
    const posiciones = this.globalService.generarPosicionAleatoria(6, 0, this.peliculas.length - 1);
    console.log(posiciones);
    let carrusel: ICarrusel[] = [];
    posiciones.forEach(pos => {
      carrusel.push(this.peliculas[pos]);
    })
    this.imagenesCarrusel = carrusel;
    this.show = true;
  }

  detallePelicula(id: string) {
    let pos: any = null;
    this.peliculas.map((pelicula: any, index: number) => {
      if (pelicula.id === id) {
        pos = index;
      }
    });

    if (pos !== null) {
      this.verDetallePelicula(pos);
    }
  }

  async crearPelicula() {
    const modal = await this.modalCtrl.create({
      component: CrearPComponent,
      mode: 'ios',
      backdropDismiss: true,
    });
    modal.componentProps = { data: modal };
    modal.present();

    const { data } = await modal.onDidDismiss();
    if (!data) {
      return;
    }
    this.verificarRespuesta({ accion: 'crear', data });
  }

  async verDetallePelicula(i: number) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      mode: 'ios',
      backdropDismiss: true,
      breakpoints: [0.25, 0.5, 0.75],
      cssClass: 'my-modal-class'
    });
    modal.componentProps = { data: modal, peliculaData: this.peliculas[i] };
    modal.present();

    const { data } = await modal.onDidDismiss();
    if (!data) {
      return;
    }
    this.verificarRespuesta(data);
  }

  private verificarRespuesta(dataa: any) {
    const { accion, data } = dataa;
    switch (accion) {
      case 'editar':
        this.http.petitionPut(data).subscribe(this.resultPeticion());
        break;
      case 'eliminar':
        const id = data;
        this.http.petitionDelete(id).subscribe(this.resultPeticion());
        break;
      case 'crear':
        this.http.petitionPost(data).subscribe(this.resultPeticion());
        break;
    }
  }
  private resultPeticion(): (response: any) => void {
    return (result: any) => {
      console.log('result::::', result);
      if (result.length > 0) {
        this.peliculas = result;
        this.setImagenesCarrusel();
      }
    };
  }
}
