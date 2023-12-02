import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() titulo: string = 'Titulo';

  constructor() {
    setTimeout(() => {
      const a = document.querySelectorAll('ion-toolbar')
      console.log(a);
      a.forEach(element => {
        console.log(element);
        element.setAttribute('background','red !important');
      })
    },3000)
  }
}
