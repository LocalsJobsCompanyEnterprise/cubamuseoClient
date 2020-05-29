import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalesRoutingModule } from './tales-routing.module';
import {TalesComponent} from './tales/tales.component';

@NgModule({
  declarations: [ TalesComponent],
  imports: [
    CommonModule
  ]
})
export class TalesModule { }
