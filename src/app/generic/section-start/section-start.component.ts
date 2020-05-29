import { EnviromentVariableServiceService } from './../../core/service/enviroment-variable-service.service';
import { SamplesServiceService } from './../../core/service/samples-service.service';
import { CollectionServiceService } from './../../core/service/collection-service.service';
import { TalesServiceService } from './../../core/service/tales-service.service';
import { StoreServiceService } from './../../core/service/store-service.service';
import { AlertService } from './../../alert/alert.service';
import { VpostServiceService } from './../../core/service/vpost-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ConfigServiceService } from 'src/app/core/service/config-service.service';

@Component({
  selector: 'app-section-start',
  templateUrl: './section-start.component.html',
  styleUrls: ['./section-start.component.css']
})
export class SectionStartComponent implements OnInit {

  sectionId: number;
  section: any;
  mySubscription: any;
  fatherLevel: number;
  father: any;
  level: number;


  constructor(private activatedRoute: ActivatedRoute,
    private collection: CollectionServiceService,
    private samples: SamplesServiceService,
    private tales: TalesServiceService,
    private vPost: VpostServiceService,
    private store: StoreServiceService,
    private alerts: AlertService,
    private router: Router,
    private enviromentVariables: EnviromentVariableServiceService,
    public config: ConfigServiceService) {
    this.section = {
      nombre: "",
      descripcion: "",
      imagen: ""
    }

    this.sectionId = 1;

    this.activatedRoute.params.subscribe(val => {
      if (val.id)
        this.sectionId = val.id;

      this.initHome();

    });



    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });


    this.enviromentVariables.setLevel(this.fatherLevel, this.father, this.section);

  }


  getLevel() {
    let data = window.localStorage['level'];
    if (data) {
      data = JSON.parse(data);
      this.level = data;
    }
  }

  initHome() {  
      return this.getHomeCollection(this.sectionId);
  }

  getHomeCollection(id) {
    this.collection.getCollectionHome(id).subscribe(
      data => {
        this.section = data;
      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getHomeSamples() {
    this.samples.getSamplesHome(3).subscribe(
      data => {
        this.section = data;
      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getHomeTales() {
    this.tales.getTalesHome(2).subscribe(
      data => {
        this.section = data;
      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getHomeVpost() {
    this.vPost.getVpostHome(6).subscribe(
      data => {
        this.section = data;
      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getHomeStore() {
    this.store.getStoreHome(7).subscribe(
      data => {
        this.section = data;
      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  ngOnInit(): void {
    this.getLevel();
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}
