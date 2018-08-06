import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatTableModule} from '@angular/material/table';

import { Material} from '../material.module';
import { RoomsComponent } from './rooms/rooms.component';



@NgModule({
  declarations: [
    AppComponent,
    

   RoomsComponent,
 ],


  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
   
    HttpModule,
    Material,
   
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
