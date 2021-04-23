import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { ThisHotelComponent } from './this-hotel/this-hotel.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/sign-up'
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'add-hotel',
    component: AddHotelComponent
  },
  {
    path: 'hotel-list',
    component: HotelListComponent
  },
  {
    path: 'this-hotel',
    component: ThisHotelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
