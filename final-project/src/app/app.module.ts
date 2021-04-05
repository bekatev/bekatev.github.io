import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { FooterComponent } from './footer/footer.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHotelComponent,
    FooterComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
