import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AlertController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  password: String = "";
  userName : String = "";
  mjs_obli : String = "*Campo Obligatorio";
  alerta : boolean[] = [false,false];
  exitoso : boolean = true;
  paginaInicio=InfoPage;
  paginaRegistro = RegistroPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
   public navParam: NavParams) {

  }

  limpiarCampos(){
    this.alerta = [false,false];
    this.exitoso = true;
  }

  login() {
    this.limpiarCampos();
    this.validarLogin();
    if(this.exitoso){
      const alert = this.alertCtrl.create({
        title: 'login exitoso',
        subTitle: 'Abriendo Sesion....Por favor espere ' + this.userName,
        buttons: [{
          text: 'Ok',
          handler: data => {
            this.navCtrl.push(this.paginaInicio,{
              "password" : this.password,
              "userName" : this.userName,
            });
          }
        }]
      });
      alert.present();      
    }
    
    /*    
    if (this.password == "" && this.userName == ""){
        const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Ingrese Usuario y contraseña',
        buttons: ['OK']
        });
        alert.present();
    }else{
      this.navCtrl.push(this.pagina,{
        "password" : this.password,
        "userName" : this.userName,
      });
    
    */
  }

  validarLogin(){
    
    if (this.userName == ""){
      this.alerta[0] = true;
      this.exitoso = false;
    }
    if (this.password == ""){
      this.alerta[1] = true;
      this.exitoso = false;
    }
  }

  RecuPass(){
    const prompt = this.alertCtrl.create({
      title: 'Recuperar contraseña',
      message: "favor ingresar correo electronico",
      inputs: [
        {
          name: 'Correo',
          placeholder: 'Correo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log(data.Correo + 'data');
            this.EnvioCorreo(data);
            console.log(data)
          }
        }
      ]
    });
    prompt.present();
  }

  EnvioCorreo(data) {
    const alert = this.alertCtrl.create({
      title: 'Envio Exitoso',
      subTitle: 'Siga los pasos enviados a su correo ' + data.Correo,
      buttons: ['OK']
    });
    alert.present();
  }
  registro(){
    this.navCtrl.push(this.paginaRegistro)
  }

}
