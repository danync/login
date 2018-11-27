import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  usuarios = [];
  mail = '';
  password = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  Aceptar(){
    if (this.mail.length > 0) {
      this.usuarios.push(this.mail);
      this.mail = "";

      // this.storage.set('notas2', JSON.stringify(this.notas));
    }
    else {
      console.log('el correo tiene 0 letras');
      const alert = this.alertCtrl.create({
        title: '¡Ups!',
        subTitle: 'Tu correo no es válido.',
        buttons: ['OK']
      });
      alert.present();
    }
    
    if (this.password.length >= 8) {

      this.password = "";

      // this.storage.set('notas2', JSON.stringify(this.notas));
    }
    else {
      console.log('el correo tiene 0 letras');
      const alert = this.alertCtrl.create({
        title: '¡Ups!',
        subTitle: 'Tu contraseña no es válida.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
