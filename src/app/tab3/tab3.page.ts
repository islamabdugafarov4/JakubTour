import {Component, OnInit} from '@angular/core';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import {Selectlist} from "../models/selectlist";
import {ToastController} from "@ionic/angular";
import {IonicSelectableComponent} from "ionic-selectable";

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
    message: string;
    selects: Selectlist[];
    select:Selectlist;
    constructor(private emailComposer: EmailComposer,private toast:ToastController) {
        this.selects = [
            {id: 1, name: 'Австралия'},
            {id: 2, name: 'Австрия'},
            {id: 3, name: 'Бельгия'},
            {id: 4, name: 'Болгария'},
            {id: 5, name: 'Великобритания'},
            {id: 6, name: 'Венгрия'},
            {id: 7, name: 'Германия'},
            {id: 8, name: "Греция"},
        ]
    }

    countryChange(event: {
        component: IonicSelectableComponent,
        value: any
    })
    {
        console.log('Страна', event.value);
    }

  async sendEmail() {
        const toast = await this.toast.create({
            message:'Письмо отправлено компании по адресу электронной почты.....',
            duration:2000
        });
        let email = {
            to: 'esendemail@bk.ru',
            cc: 'abdugafarov.islam@mail.ru',
            attachments: [
                //send files
            ],
            subject: event.valueOf(),
            body: this.message,
            isHtml: true
        };
        toast.present();
        // @ts-ignore
        this.emailComposer.open(email);
    }


}
