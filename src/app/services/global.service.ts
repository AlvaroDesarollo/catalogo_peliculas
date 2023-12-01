import { Injectable } from '@angular/core';
import { IMenu } from '../models/menu.model';

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

  constructor() { }
}
