import { Component, OnInit } from '@angular/core';
import { HeroService } from './../hero.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  signUp() {
    console.log(`Email: ${this.email}
    password: ${this.password}
    `);
    this.auth.createUserWithEmailAndPassword(this.email, this.password).catch(error => console.log(error.code)).then(result => console.log(result));
  }

}
