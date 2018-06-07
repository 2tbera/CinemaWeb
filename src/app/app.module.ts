import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { SliderComponent } from './compinents/slider/slider.component';
import { HeaderComponent } from './compinents/header/header.component';
import { ItemListComponent } from './compinents/item-list/item-list.component';
import { ComingSoonComponent } from './compinents/coming-soon/coming-soon.component';
import { FooterComponent } from './compinents/footer/footer.component';
import { ItemComponent } from './compinents/item/item.component';
import { DropDownComponent } from './compinents/drop-down/drop-down.component';
import { LiveBlockComponent } from './compinents/live-block/live-block.component';
import { CaruselComponent } from './compinents/carusel/carusel.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DataService } from "./dataService";
import { HallComponent } from './compinents/hall/hall.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    ItemListComponent,
    ComingSoonComponent,
    FooterComponent,
    ItemComponent,
    DropDownComponent,
    LiveBlockComponent,
    CaruselComponent,
    HomeComponent,
    ContactComponent,
    DetailComponent,
    HallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
