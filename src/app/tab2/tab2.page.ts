import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  justify: string = '';

  constructor(private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  justificarAusencia() {
    
    if (this.justify === '') {
      this.alertaVacio();
    } else {
      this.alertaRegistro();
    }
  }

  async alertaVacio(){
    const alert = await this.alertcontroller.create({
      header: 'Debes justificar la ausencia!',
      mode: 'ios',
      cssClass: 'contactAlert',
      buttons: [
        {
          text: 'Aceptar',
          role: 'back',
          handler: () => {
            console.log('Alerta Confirmada (Volver al menú principal)');
          },
        },
      ],
    });

    await alert.present();
  }

  async alertaRegistro(){
    const alert = await this.alertcontroller.create({
      header: 'Ausencia justificada! motivo: '+ this.justify,
      mode: 'ios',
      cssClass: 'contactAlert',
      buttons: [
        {
          text: 'Aceptar',
          role: 'back',
          handler: () => {
            console.log('Justificado!');
            this.limpiar();
          },
        },
      ],
    });

  await alert.present();


}
limpiar() {
  this.justify="";
}


}