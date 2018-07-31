import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  nombre : String = "";
  apellido : String  = "";
  usuario : String  = "";
  telefono : String  = "";  
  email : String  = "";
  confir_email : String ="";  
  pass : String ="";
  confir_pass : String = "";
  mjs_obl : String = "*Campo Obligatorio";
  alerta : boolean[] = [false,false,false,false,false,false,false,false];
  registar : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  registrar(){
    this.limpiar();
    this.validarCampos();
    if (this.registar){
      this.validarEmail();
    }
    if (this.registar){
      const alert = this.alertCtrl.create({
        title: 'Registro exitoso',
        subTitle: 'Bienvenido' + this.nombre +' '+this.apellido,
        buttons: ['OK']
      });
      alert.present();
    }

  }

  validarCampos(){
    if (this.nombre == ""){
      this.alerta[0]= true;
      this.registar =false;
    }
    if (this.apellido == ""){
      this.alerta[1]= true;
      this.registar =false;
    }
    if (this.telefono == ""){
      this.alerta[2]= true;
      this.registar =false;
    }
    if (this.email == ""){
      this.alerta[3]= true;
      this.registar =false;
    }
    if (this.confir_email == ""){
      this.alerta[4]= true;
      this.registar =false;
    }
    if (this.usuario == ""){
      this.alerta[5]= true;
      this.registar =false;
    }
    if (this.pass == ""){
      this.alerta[6]= true;
      this.registar =false;
    }
    if (this.confir_pass == ""){
      this.alerta[7]= true;
      this.registar =false;
    }
  }
  
  limpiar(){
    this.alerta = [false,false,false,false,false,false,false,false];
    this.registar = true;
  }

  validarPass(){

    if (this.pass !== this.confir_pass){
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'La contraseña ingresado no concuerda con la anterior',
        buttons: ['OK']
      });
      alert.present();
      this.registar= false;
    }
  }

  validarEmail(){
    if (this.email !== this.confir_email){
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'El email ingresado no concuerda con el anterior',
        buttons: ['OK']
      });
      alert.present();
      this.registar = false;
    }else{
      this.validarPass();
    }   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
