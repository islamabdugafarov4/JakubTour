import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AlertController} from "@ionic/angular";
import {Logindata} from "../../models/logindata";


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    data:Logindata = new Logindata();
    email = this.data.email;
    password = this.data.password;

    constructor(public afAuth:AngularFireAuth,
                public user:UserService,private router:Router,
                private alert:AlertController
               ) {
    }

    ngOnInit() {

    }

async login(){

            const {email,password} = this;
            try {
                const res = await this.afAuth.auth.signInWithEmailAndPassword(email,password);

                if (res.user){
                    this.user.setUser({
                        email,
                        uid: res.user.uid
                    });
                    this.router.navigate(['/tabs']);
                }
            }catch(err){
                console.dir(err);
                if (err.code === "auth/user-not-found") {
                    console.log("User not found");
                    this.showAlert("Упс!","Неверный логин или пароль!")
                }
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
