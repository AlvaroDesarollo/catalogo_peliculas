import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { categoria } from 'src/app/models/categorias.model';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-crear-p',
  templateUrl: './crear-p.component.html',
  styleUrls: ['./crear-p.component.scss'],
})
export class CrearPComponent implements OnInit, OnDestroy {

  @Input() data: any;
  @Input() dataP: any

  public isModalOpen: boolean = false;
  public formulario!: FormGroup;
  public categorias: any[] = [];
  public customPopoverOptions = {
    header: 'Categorias',
    subHeader: 'Selecciones una categoría de cinematografía',
  };

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService
  ) {}
  ngOnDestroy(): void {
    console.log('destruido');
  }

  ngOnInit() {
    console.log(this.data)
    this.setRules();
  }

  setRules() {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      anio: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.min(1500),
          Validators.max(2023),
        ],
      ],
      genero: ['', [Validators.required]],
      url: ['', [Validators.required]],
    });
    this.categorias = categoria;
    this.isModalOpen = true;
    if(this.dataP){
      this.formulario.patchValue(this.dataP);
    }
  }

  crearPelicula() {
    const payload = this.formulario.getRawValue();
    this.isModalOpen = false;
    payload.id = this.dataP?.id ? this.dataP.id : this.globalService.createUUID();
    this.data.dismiss(payload)
  }
}
