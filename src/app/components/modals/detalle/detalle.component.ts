import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearPComponent } from '../crear-p/crear-p.component';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() data: any;
  @Input() peliculaData: any;

  public isModalOpen: boolean = false;
  constructor(private modalCtrl: ModalController, private alertService: AlertsService) { }

  ngOnInit() {
    this.selectDescripción();
    console.log(this.data, this.peliculaData);
    this.isModalOpen = true;
  }

  selectDescripción() {
    const descripciones = {
      terror: (anio: string, nombre: string) => {
        return `Sumergiéndose en los abismos más oscuros de la psique humana, ${nombre} es una experiencia aterradora que desafía los límites del miedo. Con atmósferas escalofriantes y escaladas de tensión implacables, esta película de terror lleva a los espectadores a un viaje lleno de sobresaltos y horrores inimaginables. Cada susurro y sombra provoca escalofríos que perduran mucho después de los créditos finales, creada en ${anio}`;
      },
      drama: (anio: string, nombre: string) => {
        return `En el año de ${anio} fue creada, En un relato emotivo y conmovedor, ${nombre} explora las complejidades de la condición humana. Con actuaciones poderosas y una historia que llega al corazón, esta película lleva a los espectadores a un viaje lleno de emociones crudas y reveladoras. Enfocada en los conflictos personales y las relaciones interpersonales, ${nombre} ofrece una mirada profunda a las luchas y triunfos de la vida cotidiana.`;
      },
      'ciencia ficcion': (anio: string, nombre: string) => {
        return `Adentrándose en los límites del futuro y la tecnología, ${nombre} transporta a los espectadores a mundos inexplorados y futuristas. Con avances científicos asombrosos y paisajes alienígenas, esta película de ciencia ficción cautiva con sus innovadoras ideas y dilemas éticos. Ofrece una visión vanguardista de lo que el mañana podría deparar, desafiando la percepción de la realidad y el cosmos.`
      },
      fantasia: (anio: string, nombre: string) => {
        return `En un universo de maravillas y encantamientos, ${nombre} despliega un mundo mágico donde la imaginación cobra vida. Lleno de criaturas extraordinarias y paisajes fantásticos, esta película transporta a los espectadores a un reino de asombro y aventuras épicas. Con efectos visuales impresionantes y un encanto atemporal, ${nombre} invita a sumergirse en un viaje inolvidable.`
      },
      suspenso: (anio: string, nombre: string) => {
        return `Tejiendo una red de intriga y tensión, ${nombre} lleva a los espectadores a un viaje emocionante y lleno de incertidumbre. Con giros inesperados y una narrativa que mantiene al borde del asiento, esta película de suspenso desafía las expectativas y sumerge al público en un mundo de misterio y sorpresas. Cada giro de la trama deja al espectador ansioso por descubrir la verdad. Creada en ${anio}`
      },
      accion: (anio: string, nombre: string) => {
        return `En ${anio}, Sumergiéndose en un mundo de adrenalina y peligro constante, ${nombre} desata una emocionante odisea llena de explosiones, persecuciones y hazañas audaces. Con secuencias de acción trepidantes y coreografías impresionantes, esta película lleva al espectador a un viaje lleno de intriga y desafíos épicos. Cada escena está cargada de emoción y suspense, prometiendo una experiencia cinematográfica llena de intensidad y momentos inolvidables`
      }
    }
    const genero: 'terror' | 'drama' | 'ciencia ficcion' | 'fantasia' | 'suspenso' = this.peliculaData.genero
    this.peliculaData.descripcion = descripciones[genero](this.peliculaData.anio, this.peliculaData.nombre);
    console.log(this.peliculaData)
  }

  cerraModal(data?: any) {
    this.isModalOpen = false;
    this.data.dismiss(data);
  }
  async accion(action: string) {
    switch (action) {
      case 'editar':
        const modal = await this.modalCtrl.create({
          component: CrearPComponent,
          mode: 'ios',
          backdropDismiss: true
        })
        modal.componentProps = { data: modal, dataP: this.peliculaData };
        modal.present();

        const { data } = await modal.onDidDismiss()
        this.cerraModal({ 'accion': 'editar', data })
        break;
      case 'borrar':
        await this.alertService.loadingSimple({
          msg: `Borrando ${this.peliculaData.nombre}...`,
          duration: 1000
        })
        this.cerraModal({ 'accion': 'eliminar', data: this.peliculaData.id })
        break;
    }
  }
}
