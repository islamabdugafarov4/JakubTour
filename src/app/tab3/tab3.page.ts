import {Component, ComponentRef, OnInit} from '@angular/core';
import {Selectlist} from "../models/selectlist";
import {IonicSelectableComponent} from "ionic-selectable";

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
    sphere_selects:Selectlist[];
    country_selects: Selectlist[];
    select:Selectlist;
    constructor() {
        this.sphere_selects = [
            {id:1,name:'Розничная торговля / продажи / закупки'},
            {id:2,name:'Транспорт / логистика'},
            {id:3,name:'Строительство / архитектура'},
            {id:4,name:'Недвижимость'},
            {id:5,name:'Банки / страхование'},
            {id:6,name:'Финансы / бухгалтерия / экономика'},
            {id:7,name:'Юристы / адвокаты / нотариусы'},
            {id:8,name:'Охрана / безопасность'},
            {id:9,name:'Домашний персонал'},
            {id:10,name:'Красота / фитнес / спорт'},
            {id:11,name:'Гостиницы / туризм / отдых'},
            {id:12,name:'Бары / рестораны / кафе'},
            {id:13,name:'Образование / наука'},
            {id:14,name:'Культура / искусство / развлечения'},
            {id:15,name:'Медицина / фармацевтика'},
            {id:16,name:'Интернет / IT / компьютеры / телеком'},
            {id:17,name:'Маркетинг / реклама / дизайн'},
            {id:18,name:'Производство / энергетика'},
            {id:19,name:'Добыча сырья'},
            {id:20,name:'Административный персонал'},
            {id:21,name:'HR / управление персоналом / тренинги'},
            {id:22,name:'Начало карьеры / стажировка / практика'},
            {id:23,name:'Сервис и быт'},
            {id:24,name:'СТО / автомойки / сервисное обслуживание'},
            {id:25,name:'Топ-менеджмент / руководство высшего звена'},
            {id:26,name:'Государственная служба / некоммерческие организации'},
            {id:27,name:'Сельское хозяйство / агробизнес / лесное хозяйство'},
            {id:28,name:'Сетевой маркетинг'},
            {id:29,name:'Другие сферы деятельности'},
        ];
        this.country_selects = [
            {id: 1, name: 'Австралия'},
            {id: 2, name: 'Австрия'},
            {id: 3, name: 'Бельгия'},
            {id: 4, name: 'Болгария'},
            {id: 5, name: 'Великобритания'},
            {id: 6, name: 'Венгрия'},
            {id: 7, name: 'Германия'},
            {id: 8, name: "Греция"},
        ];

    }


    itemChange(event: {
        component: IonicSelectableComponent,
        value: any
    })
    {
        console.log('Страна', event.value);
    }

}
