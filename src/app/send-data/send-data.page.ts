import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.page.html',
  styleUrls: ['./send-data.page.scss'],
})
export class SendDataPage implements OnInit {
  todo = {};// Сбор данных
  logForm()
  {
    console.log(this.todo)
        //Вывод в консоль
  }
  constructor() { }

  ngOnInit() {
  }

}
