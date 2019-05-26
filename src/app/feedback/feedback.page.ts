import { Component, OnInit } from '@angular/core';
import {EmailComposer} from "@ionic-native/email-composer/ngx";
import {Logindata} from "../models/logindata";
import {ToastController} from "@ionic/angular";
import {SMS} from "@ionic-native/sms/ngx";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  data:Logindata = new Logindata();
  phone:string;
  name: string ;

  constructor(private emailComposer:EmailComposer,private toast:ToastController,private sms:SMS) { }

  ngOnInit(){
  };
  toEmail(){


    let email = {
      to: 'sendemail@bk.ru',
      cc: this.data.email,
      bcc: ['abdugafarov.islam@mail.ru'],
      attachments: null,
      subject:"Здраствуйте , меня заинтересовало трудоустройство зарубежом!",
      body: '<pre>Хочу пройти консультацию, мое имя </pre>'+this.name+'<pre> ,позвоните мне по номеру </pre>'+this.phone,
      isHtml: true
    };
    this.emailComposer.open(email);


  }
// async sendMessage() {
//    this.sms.send("87478433485","Здраствуйте, меня зовут"+this.name+" ,перезвоните мне по номеру "+this.phone);
//   const toast = await this.toast.create({
//      message:"Спасибо,ожидайте звонка",
//      duration:5000
//    });
// toast.present();
//   }
}
