import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

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
    public alertCtrl: AlertController,
    public storage: Storage) {

      this.usuarios = this.navParams.get('usuarios');

      this.storage.keys()
      .then(keys => {
       if(keys.some(key => key == 'usuarios2')){
         this.storage.get('usuarios2')
         .then(usuarios => {this.usuarios = JSON.parse(usuarios);
        })
       }

      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  Aceptar(){
    if (this.mail.length > 0) {
      this.usuarios.push(this.mail);
      this.mail = "";

      this.storage.set('usuarios2', JSON.stringify(this.usuarios));
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
      this.usuarios.push(this.password);
      this.password = "";

      this.storage.set('usuarios2', JSON.stringify(this.notas));
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
