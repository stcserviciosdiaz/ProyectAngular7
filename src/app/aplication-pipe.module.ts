import { NgModule } from '@angular/core';
import { FilterAmountsPipe } from './pipes/filter-amounts.pipe';
//import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FilterAmountsPipe
  ],
  imports: [
    //CommonModule
  ],
  exports:[
    FilterAmountsPipe
  ]
})
export class AplicationPipeModule { }
