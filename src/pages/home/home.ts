import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { UsuariosPage } from '../usuarios/usuarios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  registro = SigninPage;
  usuarios = [
    {correo: '',
    contrasena: ''}
  ];
  usernames = UsuariosPage;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

  }

  Ingresar(){
    // let index = this.usuarios.findIndex(usuarios => usuario.correo == this.correo && usuario => usuario.contrasena == this.contrasena);
    // if (this.usuario.correo.length > 0) {
    //   this.correo = "";
    // }
    // else {
    // console.log('el correo tiene 0 letras');
    // const alert = this.alertCtrl.create({
    // title: '¡Ups!',
    // subTitle: 'Tu correo no es válido.',
    // buttons: ['OK']
    // });
    // alert.present();
    // }
    
    // if (this.usuario.contrasena.length >= 8) {

    // this.contrasena = "";

    // }
    // else {
    // console.log('el correo tiene 0 letras');
    // const alert = this.alertCtrl.create({
    // title: '¡Ups!',
    // subTitle: 'Tu contraseña no es válida.',
    // buttons: ['OK']
    // });
    // alert.present();
    // }
    
  }


  Registrar(){
    this.navCtrl.push(this.registro, {usuarios: this.usuarios});
  }

  Users(){
    this.navCtrl.push(this.usernames);
  }

}
