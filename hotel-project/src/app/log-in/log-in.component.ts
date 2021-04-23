import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HeroService } from './../hero.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(public auth: AngularFireAuth, private router: Router,public heroService: HeroService) {
    this.heroService.noSuchUser = false;
    this.heroService.loggedIn = false;
  }

  ngOnInit(): void {
  }
  login() {
    console.log(`Email: ${this.email}
    password: ${this.password}
    `);
    this.auth.signInWithEmailAndPassword(this.email, this.password).then(result => {this.router.navigate(['/hotel-list']), this.heroService.loggedIn = true}).catch(error => {this.router.navigate(['/log-in']), this.heroService.noSuchUser = true});
  }

}
