import {Component} from '@angular/core';
import {Router} from "@angular/router";


@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    isSearchbarOpened = false;
    names: string[];
    searchQuery: string = '';
    nav_countryes = [
        'australiya',
        'avstryia',
        'belgi',
        'bolg',
        'velik',
        'vengr',
        'grec',
        'germany'];

    images = [
        "/assets/country_images/1.jpeg",
        "/assets/country_images/2.jpeg",
        "/assets/country_images/3.jpeg",
        "/assets/country_images/4.jpeg",
        "/assets/country_images/5.jpeg",
        "/assets/country_images/6.jpeg",
        "/assets/country_images/7.jpeg",
        "/assets/country_images/8.jpeg",];

    constructor(private router: Router) {
    this.initializeItems();
    }
    initializeItems(){
        this.names = [
            "Австралия",
            "Австрия",
            "Бельгия",
            "Болгария",
            "Великобритания",
            "Венгрия",
            "Германия",
            "Греция"
        ];

    }
    getItems(event:any){
        this.initializeItems();
        const val = event.target.value
        if (val && val.trim() != '') {
            this.names = this.names.filter((item) =>{
                return (item.toLowerCase().indexOf(val.toLowerCase())>-1);
            })
        }
    }
    toCountry($event: any) {
        this.router.navigateByUrl($event);
    }


}
