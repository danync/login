import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  registro = SigninPage;
  usuarios = [
    {correo: '',
    contraseña: ''}
  ];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

  }

  Ingresar(){
    this.usuarios.push(this.correo);
    this.usuarios.push(this.contraseña);
    // if (this.mail.length > 0) {
    //   this.usuarios.push(this.mail);
    //   this.mail = "";

    //   // this.storage.set('notas2', JSON.stringify(this.notas));
    // }
    // else {
    //   console.log('el correo tiene 0 letras');
    //   const alert = this.alertCtrl.create({
    //     title: '¡Ups!',
    //     subTitle: 'Tu correo no es válido.',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // }
    
    // if (this.password.length >= 8) {

    //   this.password = "";

    //   // this.storage.set('notas2', JSON.stringify(this.notas));
    // }
    // else {
    //   console.log('el correo tiene 0 letras');
    //   const alert = this.alertCtrl.create({
    //     title: '¡Ups!',
    //     subTitle: 'Tu contraseña no es válida.',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // }
    
  }


  Registrar(){
    this.navCtrl.push(this.registro);
  }

}
