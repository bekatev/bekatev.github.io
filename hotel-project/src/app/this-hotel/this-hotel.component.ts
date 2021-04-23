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


}
