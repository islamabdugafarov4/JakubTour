import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    constructor(private router:Router){}
    toAustraliya() {this.router.navigateByUrl('australiya');}
    toVengr() {this.router.navigateByUrl('vengr');}
    toVelik() {this.router.navigateByUrl('velik');}
    toGrec() {this.router.navigateByUrl('grec');}
    toGermany() {this.router.navigateByUrl('germany');}
    toBelgi() {this.router.navigateByUrl('belgi');}
    toAvstriya() {this.router.navigateByUrl('avstryia');}
    toBolg() {this.router.navigateByUrl('bolg');}
}
