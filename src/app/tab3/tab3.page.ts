import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
   message:string;
  constructor(private emailComposer:EmailComposer){}
  sendEmail(){
    let email = {
      to: 'esendemail@bk.ru',
      cc:'abdugafarov.islam@mail.ru',
      attachments:[
          //send files
      ],
        subject:'Заявка на трудоустройство',
        body:this.message,
        isHtml:true
    };
    this.emailComposer.open(email);
    }
}
