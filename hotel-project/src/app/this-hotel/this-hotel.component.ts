import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-this-hotel',
  templateUrl: './this-hotel.component.html',
  styleUrls: ['./this-hotel.component.css']
})
export class ThisHotelComponent implements OnInit {
  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
  }
  checkbox1(e){
    if(e.target.checked){
       this.heroService.chosenHotel.room1Availability = true;
    }
    else{
      this.heroService.chosenHotel.room1Availability = false;
    }
  }
  checkbox2(e){
    if(e.target.checked){
      this.heroService.chosenHotel.room2Availability = true;
    }
    else{
      this.heroService.chosenHotel.room2Availability = false;
    }
  }
  checkbox3(e){
    if(e.target.checked){
      this.heroService.chosenHotel.room3Availability = true;
    }
    else{
      this.heroService.chosenHotel.room3Availability = false;
    }
  }
  checkbox4(e){
    if(e.target.checked){
      this.heroService.chosenHotel.room4Availability = true;
    }
    else{
      this.heroService.chosenHotel.room4Availability = false;
    }
  }
  rooms = false;
  addRooms(){
    this.rooms = true;
  }
  addRoom(){
    this.heroService.updateHotels(this.heroService.chosenHotel);
    this.heroService.chosenHotel = {
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
