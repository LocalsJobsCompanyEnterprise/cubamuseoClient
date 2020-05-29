import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CubamuseoClientV1';
  categoryType: Subject <string>;

  constructor(private router: Router, private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService) {
    this.categoryType = new Subject <string>();
    this.categoryType.next('collection')
  }

  updateBreadcrumb(): void {
    const breadcrumb = [
      
          {
            label: 'Galeria {{section, id}} ',
            url: 'gallery/:id/:level/:component/:section'
          },
          {
            label: 'Galeria estampas {{id}}',
            url: 'samples-gallery/:id'
          }, 
          {
            label: '{{section,id}}',
            url: 'text/:id/:level/:component/:section'
          },
          {
            label: 'Estampa {{id}}',
            url: 'tale/:id'
          }, 
          {
            label: 'Articulo {{id}}',
            url: 'tale/:id'
          },
          {
            label: 'Inicio ',
            url: 'section-start'
          },
          {
            label: 'Muestras',
            url: 'samples/:id'
          },
          {
            label: 'Estampas',
            url: 'tales/:id'
          },
          {
            label: 'V-Post',
            url: 'vpost/:id'
          },
          {
            label: 'Colecciones',
            url: 'collection/:id'
          },
          {
            label: 'Tienda',
            url: 'store/:id'
          },
          {
            label: 'Colecciones',
            url: 'collection/:id'
          }
    ];
    this.ngDynamicBreadcrumbService.updateBreadcrumb(breadcrumb);
  }

  ngOnInit(){
   this.updateBreadcrumb();
  }

}
