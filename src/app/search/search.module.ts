import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ]
})
export class SearchModule { }
