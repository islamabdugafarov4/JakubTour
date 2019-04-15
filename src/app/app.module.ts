import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {BrMaskerModule} from 'brmasker-ionic-3';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmailComposer} from "@ionic-native/email-composer/ngx";
import firebaseConfig from './firebase';
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {UserService} from "./services/user.service";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/firestore";
import {IonicSelectableModule} from "ionic-selectable";

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrMaskerModule,
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        IonicSelectableModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        EmailComposer,
        UserService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
