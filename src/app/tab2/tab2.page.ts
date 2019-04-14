import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Countryes} from "../models/countryes";

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    nav_countryes = [
        'australiya',
        'avstryia',
        'belgi',
        'bolg',
        'velik',
        'vengr',
        'grec',
        'germany'];
    names =[
        "Австралия",
        "Австрия",
        "Бельгия",
        "Болгария",
        "Великобритания",
        "Венгрия",
        "Германия",
        "Греция"];
    images = [
        "/assets/country_images/1.jpeg",
        "/assets/country_images/2.jpeg",
        "/assets/country_images/3.jpeg",
        "/assets/country_images/4.jpeg",
        "/assets/country_images/5.jpeg",
        "/assets/country_images/6.jpeg",
        "/assets/country_images/7.jpeg",
        "/assets/country_images/8.jpeg",];
    constructor(private router: Router) {}

    toCountry($event: any) {
        this.router.navigateByUrl($event);
    }
}
