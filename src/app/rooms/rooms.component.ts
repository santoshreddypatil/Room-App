import { Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent  {
capacity = 4;
childCapacity=3;
childAndAdults: number;


Room_counter = 1
Adults_counter= 1;
childCount=0;



 
 roomIncrement(){
  
    this.Room_counter++;
    this.capacity= this.capacity+4;
    this.childCapacity= this.childCapacity+4;
    this.Adults_counter ++;
    
    }


  roomDecrement(){
  
    this.Room_counter -- ;
    this.capacity= this.capacity-4
    this.childCapacity= this.childCapacity-4;
    if(this.Room_counter)
    {
      return this.Adults_counter= this.capacity, this.childCount=0;
    }
   
    }

    Adults_Decrement(){
     this.Adults_counter --;
     this.childAndAdults = this.Adults_counter + this.childCount;
    }

    Adults_Increment(){
     this.Adults_counter ++;
      this.childAndAdults = this.Adults_counter + this.childCount;
    }
 childIcrement()
 {
    
    this.childCount++;
    this.childAndAdults = this.Adults_counter + this.childCount;
    
        
 }


 childDecrement()
 {
  this.childCount--
  this.childAndAdults = this.Adults_counter + this.childCount;

 }

  
}
