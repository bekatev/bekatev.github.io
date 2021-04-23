import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotel!: any;
  hotels!: any;
  selectedHotel!: any;

  hotel1: {name: any, location: any, price: any, imgURL: any, imgURL1: any, imgURL2: any, description: any, rooms:any, stars:any, room1Number: any, room1People: any, room1Description: any, room1Price: any, room1Availability: any, room1Dates: any, room2Number: any, room2People: any, room2Description: any, room2Price: any, room2Availability: any, room2Dates: any, room3Number: any, room3People: any, room3Description: any, room3Price: any, room3Availability: any,  room3Dates: any, room4Number: any, room4People: any, room4Description: any, room4Price: any, room4Availability: any, room4Dates: any} = {
    name: '',
    location: '',
    price: null,
    imgURL: '',
    imgURL1: '',
    imgURL2: '',
    description: '',
    rooms: '',
    stars: '',
    room1Number: '',
    room1People: '',
    room1Description: '',
    room1Price: '',
    room1Availability: '',
    room1Dates: '',
    room2Number: '',
    room2People: '',
    room2Description: '',
    room2Price: '',
    room2Availability: '',
    room2Dates: '',
    room3Number: '',
    room3People: '',
    room3Description: '',
    room3Price: '',
    room3Availability: '',
    room3Dates: '',
    room4Number: '',
    room4People: '',
    room4Description: '',
    room4Price: '',
    room4Availability: '',
    room4Dates: '',
  };
  constructor(public heroService: HeroService,private router: Router) {
    this.hotels = JSON.parse(localStorage.getItem('hotels') || '{}');
  }

  ngOnInit(): void {
  }

  public selectHotel(hotel: any){
    this.selectedHotel = hotel;
  }

  load(): void{
    window.location.reload();
  }

  onSubmit(){
    this.heroService.createHotels(this.hotel1);
    this.hotel1 = {
      name: '',
      location: '',
      price: null,
      imgURL: '',
      imgURL1: '',
      imgURL2: '',
      description: '',
      rooms: '',
      stars: '',
      room1Number: '',
      room1People: '',
      room1Description: '',
      room1Price: '',
      room1Availability: '',
      room1Dates: '',
      room2Number: '',
      room2People: '',
      room2Description: '',
      room2Price: '',
      room2Availability: '',
      room2Dates: '',
      room3Number: '',
      room3People: '',
      room3Description: '',
      room3Price: '',
      room3Availability: '',
      room3Dates: '',
      room4Number: '',
      room4People: '',
      room4Description: '',
      room4Price: '',
      room4Availability: '',
      room4Dates: '',
    };

}
}
