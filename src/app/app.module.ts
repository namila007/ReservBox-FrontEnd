import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {MaterialModule} from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { SearchRoomsComponent } from './search-rooms/search-rooms.component';
import { ConfigComponent } from './config/config.component';
import { ConfigService } from './config.service';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchRoomsComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [ConfigService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
