import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdButtonSlideModule } from 'projects/ad-button-slide/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AdButtonSlideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
