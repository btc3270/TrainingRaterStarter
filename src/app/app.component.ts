import { Component } from '@angular/core';
import {Trsmiles} from './Trsmiles.service';

@Component({
  selector: 'app-root',
  template: '<h1> </h1>',
  styleUrls: ['./app.component.less'],
  providers: [Trsmiles]
})

export class AppComponent {
  isNavbarCollapsed = false;

users: 'Iuser[]';
private trsmiles: Trsmiles;

constructor(trsmiles: Trsmiles) {
    this.trsmiles = trsmiles;
  }
}
