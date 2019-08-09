import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HttpClientModule } from '@angular/common/http';
import { UcWidgetModule } from 'ngx-uploadcare-widget';

import { CarService } from './services/car/car.service';
import { CarComponent } from './car/car.component';
import { NewCarComponent } from './new-car/new-car.component';
import { CarItemComponent } from './car-item/car-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    CarComponent,
    NewCarComponent,
    CarItemComponent
  ],
  entryComponents: [NewCarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UcWidgetModule
  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
