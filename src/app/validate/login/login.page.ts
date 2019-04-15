import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {auth} from 'firebase/app';
import {Router} from "@angular/router";
import {reject} from "q";
import * as firebase from "firebase";
import {UserService} from "../../services/user.service";
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
     email:string = "";
     password:string = "";
    constructor(public afAuth:AngularFireAuth, public user:UserService,private router:Router) {
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
         }
         }

     }
     doGoogleLogin(){
        return new Promise<any>((resolve,reject)=>{
            let provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            this.afAuth.auth.signInWithPopup(provider).then(res =>{
                resolve(res);
                this.router.navigate(['/tabs']);
            })

        })
     }
}
