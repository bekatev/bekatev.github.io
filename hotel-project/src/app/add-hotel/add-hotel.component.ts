import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  hotel: {name: any, location: any, price: any, imgURL: any, imgURL1: any, imgURL2: any, description: any, rooms:any, stars:any, room1Number: any, room1People: any, room1Description: any, room1Price: any, room1Availability: any, room1Dates: any, room2Number: any, room2People: any, room2Description: any, room2Price: any, room2Availability: any, room2Dates: any, room3Number: any, room3People: any, room3Description: any, room3Price: any, room3Availability: any,  room3Dates: any, room4Number: any, room4People: any, room4Description: any, room4Price: any, room4Availability: any, room4Dates: any} = {
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
  constructor(public heroService: HeroService) { }



  ngOnInit(): void {
  }

checkbox1(e){
  if(e.target.checked){
     this.hotel.room1Availability = true;
  }
  else{
    this.hotel.room1Availability = false;
  }
}
checkbox2(e){
  if(e.target.checked){
     this.hotel.room2Availability = true;
  }
  else{
    this.hotel.room2Availability = false;
  }
}
checkbox3(e){
  if(e.target.checked){
     this.hotel.room3Availability = true;
  }
  else{
    this.hotel.room3Availability = false;
  }
}
checkbox4(e){
  if(e.target.checked){
     this.hotel.room4Availability = true;
  }
  else{
    this.hotel.room4Availability = false;
  }
}
rooms = false;
addRooms(){
  this.rooms = true;
}




  onSubmit(){
    this.heroService.createHotels(this.hotel);
    this.hotel = {
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
