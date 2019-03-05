import { Component } from '@angular/core';
import {EmailComposer} from "@ionic-native/email-composer/ngx";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
constructor(private emailComposer:EmailComposer){}



  sendEmail(){
    let email = {
      to: 'esendemail@bk.ru',
      cc:'abdugafarov.islam@mail.ru',
      attachments:[
          //send files
      ],
        subject:'Hello',
        body:'dasdasdas',
        isHtml:true
    };
    this.emailComposer.open(email);
    }

}
