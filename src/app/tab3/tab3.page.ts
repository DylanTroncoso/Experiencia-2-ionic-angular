import { Component, OnInit } from '@angular/core';
import { IClases } from 'src/interfaces/IClases';
import { CrudClasesService } from '../services/crud-clases.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  clases: any [] = [];

  constructor(private apIClases: CrudClasesService) { }

  ngOnInit() {
    this.mostrarClases();
  }

  mostrarClases () {
    this.apIClases.getClases().subscribe(datos => this.clases = datos)
  }

}
