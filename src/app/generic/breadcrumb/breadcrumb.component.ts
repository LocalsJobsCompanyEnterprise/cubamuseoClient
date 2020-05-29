import { Subject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() parts: any;
  @Input() activePage: any;
  url: any[];

  constructor() { 
    this.parts.unshift('Inicio');
    const limit = this.parts.length;
    for (let i =0; i < limit; i++){
      if(i>0){
        this.parts.splice(i*2,0,'-');
      }
    }
    this.parts.pop();

    for(let i =0; i < limit; i++){
      if(this.parts[i] !== 'inicio' && this.parts[i] !== '-'){
        this.url[i] = (typeof this.url[i-2] === 'undefined' ? '' : 
        this.url[i-2]).replace(/\s/g, '-') + '/' + this.parts[i].replace(/\s/g,'-');
      }

    }
  }

  ngOnInit(): void {
  }

}
