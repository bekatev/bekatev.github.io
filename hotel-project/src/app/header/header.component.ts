import { Component, OnInit } from '@angular/core';
import { HeroService } from './../hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public heroService: HeroService, public router:Router) { }

  ngOnInit(): void {
  }

  inSystem(){
    if(this.router.url === '/hotel-list' || this.router.url === '/add-hotel' || this.router.url === '/this-hotel'){
      return true;
    } else return false;
}
}
