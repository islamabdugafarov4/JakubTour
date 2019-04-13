import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {auth} from 'firebase/app';
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    email: string = "";
    password: string = "";
    confrimpassword: string = "";

    constructor(public afAuth: AngularFireAuth, public alert: AlertController,
                public router:Router,private user:UserService,private afstore:AngularFirestore) {
    }

    ngOnInit() {
    }

    async register() {
        const {email, password, confrimpassword} = this
        if (password != confrimpassword) {
            this.showAlert("Ошибка!","Пароли не совпадают!");
            return console.error("Пароли не совпадают!")
        }
        try {
            const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            console.log(res);
            this.afstore.doc('/users/${res.user.uid}').set({
               email
            });
           ;
            if (res.user){
                    this.user.setUser({
                        email,
                        uid: res.user.uid
                    });}
            this.showAlert("Успех!","Добро пожаловать!");
            this.router.navigate(['/tabs']);

        } catch (e) {
            console.dir(e);
            this.showAlert("Ошибка!",e.message);

        }

    }

    async showAlert(header: string, message: string) {
        const alert = await this.alert.create({
            header,
            message,
            buttons:["Ok"]
        });
        await alert.present();
    }
}
