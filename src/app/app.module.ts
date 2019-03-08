import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContractComponent } from './contract/contract.component';
import {MaterialModule} from './material-module';
import { NewContractComponent } from './new-contract/new-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    NewContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
