import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Component, ViewChild, Inject } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CubamuseoClientV1';
  categoryType: Subject <string>;
 
  
  closeResult = '';
  constructor(private modalService: NgbModal,
    private router: Router, 
    private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService) {
    this.categoryType = new Subject <string>();
    this.categoryType.next('collection')
  }

 open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
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
