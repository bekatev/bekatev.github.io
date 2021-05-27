import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public hotels = JSON.parse(localStorage.getItem('hotels') || '[]');

  constructor() { }
  hotel!: any;
  noSuchUser!: any;
  loggedIn!:any;
  chosenHotel!: any;

  public getHotels(): Array<{ name: any, location: any, price: any, imgURL: any, imgURL1: any, imgURL2: any, description: any, rooms:any, room1Number: any, room1People: any, room1Description: any, room1Price: any, room1Availability: any, room1Dates: any, room2Number: any, room2People: any, room2Description: any, room2Price: any, room2Availability: any, room2Dates: any, room3Number: any, room3People: any, room3Description: any, room3Price: any, room3Availability: any,  room3Dates: any, room4Number: any, room4People: any, room4Description: any, room4Price: any, room4Availability: any, room4Dates: any}> {
    let data = localStorage.getItem(this.hotels);
    return JSON.parse(data);
  }
  public createHotels(hotel: { name: any, location: any, price: any, imgURL: any, imgURL1: any, imgURL2: any, description: any, rooms:any, room1Number: any, room1People: any, room1Description: any, room1Price: any, room1Availability: any, room1Dates: any, room2Number: any, room2People: any, room2Description: any, room2Price: any, room2Availability: any, room2Dates: any, room3Number: any, room3People: any, room3Description: any, room3Price: any, room3Availability: any,  room3Dates: any, room4Number: any, room4People: any, room4Description: any, room4Price: any, room4Availability: any, room4Dates: any}){
    this.hotels.push(hotel);
    localStorage.setItem('hotels', JSON.stringify(this.hotels));
  }
  public chooseHotel(hotel: any){
    this.chosenHotel = hotel;
  }
  public updateHotels(hotel: { name: any, location: any, price: any, imgURL: any, imgURL1: any, imgURL2: any, description: any, rooms:any, room1Number: any, room1People: any, room1Description: any, room1Price: any, room1Availability: any, room1Dates: any, room2Number: any, room2People: any, room2Description: any, room2Price: any, room2Availability: any, room2Dates: any, room3Number: any, room3People: any, room3Description: any, room3Price: any, room3Availability: any,  room3Dates: any, room4Number: any, room4People: any, room4Description: any, room4Price: any, room4Availability: any, room4Dates: any, }){
    var cart_items = JSON.parse(localStorage.getItem('hotels') || '[]');
    for (let i=0;i<cart_items.length;i++){
      if (cart_items[i].name == hotel.name) {
        cart_items.splice(i,1);
        cart_items.push(hotel);

        localStorage["hotels"] = JSON.stringify(cart_items);
      }
    }
  }
  public cleanAll() {
    localStorage.clear()
  }


}
