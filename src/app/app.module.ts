import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SliderModule} from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { SolarCardComponent } from './solar-card/solar-card.component';
import { FilterDataComponent } from './filter-data/filter-data.component';
import { SilderPipe } from './silder.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SolarCardComponent,
    FilterDataComponent,
    SilderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SliderModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
