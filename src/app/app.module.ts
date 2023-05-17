import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SaiOneLibModule } from 'sai-one-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SaiOneLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
