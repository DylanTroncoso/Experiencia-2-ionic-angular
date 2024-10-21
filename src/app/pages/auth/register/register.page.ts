import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nom: string="";
  rut: string="";
  email: string="";
  pass: string="";

  constructor( private alertcontroller: AlertController,
                private router: Router) { }

  ngOnInit() {
  }

  registroNuevo(){
    if (this.nom=='' || this.rut=='' || this.email=='' || this.pass=='') {
      this.errorReg()
    } else {
      this.alertaRegistro()
    }
  }


  async errorReg(){
    const alert = await this.alertcontroller.create({
      header: 'Error! Debes completar todos los campos! ',
      mode: 'ios',
      buttons: [
        {
          text: 'Aceptar',
          role: 'back',
          handler: () => {
            console.log('Alerta aceptada (cerrar alerta)');
          },
        },
      ],
    });

    await alert.present();

  }

  async alertaRegistro(){
    const alert = await this.alertcontroller.create({
      header: 'Fuiste registrado/a! Ahora debes iniciar sesión! '+ this.email,
      mode: 'ios',
      cssClass: 'contactAlert',
      buttons: [
        {
          text: 'Iniciar sesión',
          role: 'back',
          handler: () => {
            console.log('Alerta Confirmada (Volver al menú principal)');
            this.router.navigate(['/login'])
            this.limpiar();
          },
        },
      ],
    });

    await alert.present();

  }
  limpiar(){
    this.nom="";
    this.email="";
    this.pass="";
    this.rut="";
  }
}
