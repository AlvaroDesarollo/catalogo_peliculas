import { Injectable } from '@angular/core';
import { IMenu } from '../models/menu.model';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public menu: IMenu[] = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ]
  public labels: string[] = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  public modalDetalle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  createUUID(): string {
    return uuidv4();
  }

  generarPosicionAleatoria(cantidad: number, min: number, max: number): number[] {
    if (cantidad > (max - min + 1) || max < min) {
      throw new Error("No se pueden generar la cantidad de números sin repetir en el rango proporcionado");
    }

    const numerosAleatorios: number[] = [];
    while (numerosAleatorios.length < cantidad) {
      const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numerosAleatorios.includes(numeroAleatorio)) {
        numerosAleatorios.push(numeroAleatorio);
      }
    }
    return numerosAleatorios;
  }
}
