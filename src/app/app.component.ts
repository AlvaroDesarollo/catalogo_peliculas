import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';
import { IMenu } from './models/menu.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: IMenu[] = [];
  public labels: string[] = [];
  constructor(private globalService: GlobalService) {
    this.appPages = globalService.menu;
    this.labels = globalService.labels;
  }
}
