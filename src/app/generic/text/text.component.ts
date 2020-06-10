import { ConfigServiceService } from './../../core/service/config-service.service';
import { EnviromentVariableServiceService } from './../../core/service/enviroment-variable-service.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SamplesServiceService } from './../../core/service/samples-service.service';
import { CollectionServiceService } from './../../core/service/collection-service.service';
import { TalesServiceService } from './../../core/service/tales-service.service';
import { StoreServiceService } from './../../core/service/store-service.service';
import { AlertService } from './../../alert/alert.service';
import { VpostServiceService } from './../../core/service/vpost-service.service';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  sectionId: number;
  itemId: number;
  category: any;
  pages: any;
  mySubscription: any;
  section: any;
  level: number;
  fatherLevel: number;
  baseFolder: string;
  component: string;
  sonLevel: number;
  previousSection: any;


  constructor(private activatedRoute: ActivatedRoute,
    private collection: CollectionServiceService,
    private samples: SamplesServiceService,
    private tales: TalesServiceService,
    private vPost: VpostServiceService,
    private store: StoreServiceService,
    private alerts: AlertService,
    private router: Router,
    private enviromentVariables: EnviromentVariableServiceService,
    public configService: ConfigServiceService,
    private breadcrumbService: NgDynamicBreadcrumbService) {
    this.level = -1;

    this.component = 'text';
    this.activatedRoute.params.subscribe(val => {
      this.sectionId = val.id;
      this.category = val.section;
      this.level = parseInt(val.sonLevel);
      this.initContent();
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };

      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
    });



  }

  // getLevel() {
  //   let data = window.localStorage['level'];
  //   if (data) {
  //     console.log(data);
  //     data = JSON.parse(data);
  //     this.level = data;
  //   }
  // }

  initContent() {
    // this.getLevel();
    if (this.category === 'collection') {
      if (this.level === 3) {
        this.getSectionById();

        const breadcrumb = [
          {
            label: 'Inicio',
            url: 'collection/:id'
          },
          {
            label: '{{this.section.nombre}}',
            url: '/text/:this.idSeccion/:this.sonLevel/:this.category'
          }
        ];
        this.updateBreadcrumb(breadcrumb);
      }
      else if (this.level === 2) {
        this.getCategoryById();
        this.getSectionByCategory();
        const breadcrumb = [
          {
            label: 'Inicio',
            url: 'collection/:id'
          },
          {
            label: '{{this.previousSection.nombre}}',
            url: '/text/:this.previousSection.idSeccion/:this.level/:this.category'
          },
          {
            label: '{{this.section.nombre}}',
            url: '/text/:this.idSeccion/:this.sonLevel/:this.category'
          },

        ];
        this.updateBreadcrumb(breadcrumb);
      }
    }
    else if (this.category === 'samples') {
      if (this.level === 2) {
        this.getSampleById();
        const breadcrumb = [
          {
            label: 'Inicio',
            url: 'collection/1'
          },
          {
            label: 'Estampas',
            url: 'samples/3'
          },
          {
            label: '{{this.section.nombre}}',
            url: '/text/:this.idSeccion/:this.sonLevel/:this.category'
          }
        ];
        this.updateBreadcrumb(breadcrumb);

      }
    }
  }

  updateBreadcrumb(breadcrumb): void {
    this.breadcrumbService.updateBreadcrumb(breadcrumb);
  }

  setSonLevel() {
    this.enviromentVariables.setLevel(this.level, this.component, this.category);
  }

  getSonLevel() {
    let data = window.localStorage['level'];
    if (data) {
      data = JSON.parse(data);
      this.sonLevel = data;
    }
  }


  getSectionById() {
    this.collection.getSectionById(this.sectionId).subscribe(
      data => {
        this.section = data;
        let aux = {
          level_3: this.section.nombre,
          level_2: 'none'
        }
        window.localStorage.setItem('folderByLevel', JSON.stringify(aux));
      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getSectionByCategory() {
    this.collection.getSectionByCategory(this.sectionId).subscribe(
      (data: any) => {
        this.collection.getSectionById(data.idSeccion).subscribe(
          data => {
            this.previousSection = data;
          }
        )
      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getCategoryById() {
    this.collection.getCategoryById(this.sectionId).subscribe(
      data => {
        this.section = data;
        let folderByLevel = JSON.parse(window.localStorage.getItem('folderByLevel'));
        if (folderByLevel.level_2 != this.section.carpeta)
          folderByLevel.level_2 = this.section.carpeta

        this.baseFolder = folderByLevel.level_3;
        window.localStorage.setItem('folderByLevel', JSON.stringify(folderByLevel));
      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getSampleById() {
    this.samples.getSampleById(this.sectionId).subscribe(
      data => {
        this.section = data;
      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  ngOnInit(): void {
    this.setSonLevel();
    this.getSonLevel();
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }




}
