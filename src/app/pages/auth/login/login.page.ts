import { Component, Injectable, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata: any;
  usuario = {
    rut: 0,
    dv: 0,
    username: "",
    password: "",
    email: "",
    isactive: false,
  }

  loginForm: FormGroup;

  constructor(private authservice: AuthService,
    private router: Router,
    private toast: ToastController,
    private alertcontroller: AlertController,
    private builder: FormBuilder) {
    this.loginForm = this.builder.group({
      'username': new FormControl("", [Validators.required, Validators.minLength(6)]),
      'password': new FormControl("", [Validators.required, Validators.minLength(8)]),
    })
  }


  ngOnInit() {
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authservice.GetUsersByUsername(username).subscribe(resp => {
      this.userdata = resp;
      console.log(this.userdata);
      if (this.userdata.length === 0) {
        this.loginForm.reset();
        this.UsuarioNoExiste();
        return;
      }

      this.usuario = {
        rut: this.userdata[0].rut,
        dv: this.userdata[0].dv,
        username: this.userdata[0].username,
        password: this.userdata[0].password,
        email: this.userdata[0].email,
        isactive: this.userdata[0].isactive,
      }

      if (this.usuario.password !== password) {
        this.loginForm.reset();
        this.ErrorUsuario();
        return;
      }

      if (this.usuario.isactive) {
        this.loginForm.reset();
        this.UsuarioInactivo();
        return;
      }

      this.IniciarSesion(this.usuario);
    })
  }

  private IniciarSesion(usuario: any) {
    sessionStorage.setItem('username', usuario.username);
    sessionStorage.setItem('rut', usuario.rut);
    sessionStorage.setItem('dv', usuario.dv);
    this.showToast('Bienvenido ' + usuario.username);
    this.router.navigate(['/tabs/tab1']);
  }

  async showToast(msg: any) {
    const toast=await this.toast.create({
      message:msg,
      duration:3000
    })
    toast.present();
  }

  async UsuarioInactivo(){
    const alerta =await this.alertcontroller.create({
      header:'Usuario Inactivo',
      message:'Contáctese con dy.troncoso@duocuc.cl',
      buttons:['OK']
    })
    alerta.present();
  }

  async ErrorUsuario(){
    const alerta = await this.alertcontroller.create({
      header:'Error',
      message:'Contraseña incorrecta',
      buttons:['OK']
    })
    alerta.present();
  }

  async UsuarioNoExiste(){
    const alerta = await this.alertcontroller.create({
      header:'Error',
      message:'Usuario no existe',
      buttons:['OK']
    })
    alerta.present();
  }
}