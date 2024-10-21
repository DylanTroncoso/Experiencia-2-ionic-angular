import { Component } from '@angular/core';

  interface Opciones{
    icon: string;
    name: string;
    redirecTo: string;
  }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones: Opciones[] = [
    {
      icon:'person-remove-outline',
      name:'Cerrar sesión',
      redirecTo: '/login'
    }
  ]
  constructor() {}
}
