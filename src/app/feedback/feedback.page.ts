import { Component, OnInit } from '@angular/core';
import {EmailComposer} from "@ionic-native/email-composer/ngx";
import {Logindata} from "../models/logindata";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  data:Logindata = new Logindata();
  phone: number;
  name: string = "";

  constructor(private emailComposer:EmailComposer) { }

  ngOnInit(){
  };
  toEmail(){


    let email = {
      to: 'sendemail@bk.ru',
      cc: this.data.email,
      bcc: ['abdugafarov.islam@mail.ru'],
      attachments: null,
      subject:"Здраствуйте , меня заинтересовало трудоустройство зарубежом!",
      body: "Хочу пройти консультацию, мое имя"+this.name+",позвоните мне по номеру"+this.phone,
      isHtml: true
    };
    this.emailComposer.open(email);


  }
}
