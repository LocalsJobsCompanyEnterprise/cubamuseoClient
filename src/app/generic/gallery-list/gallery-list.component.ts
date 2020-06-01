import { ConfigServiceService } from './../../core/service/config-service.service';
import { Subject } from 'rxjs';
import { EnviromentVariableServiceService } from './../../core/service/enviroment-variable-service.service';
import { SamplesServiceService } from './../../core/service/samples-service.service';
import { AlertService } from './../../alert/alert.service';
import { VpostServiceService } from './../../core/service/vpost-service.service';
import { CollectionServiceService } from './../../core/service/collection-service.service';
import { StoreServiceService } from './../../core/service/store-service.service';
import { TalesServiceService } from './../../core/service/tales-service.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
  gallerylist: any[];
  itemId: any;
  section: any;
  mySubscription: any;
  level: any;
  bottomTop = 0;
  limit = 10;
  isScrollable: boolean = true;
  component: string;
  foldername:any;
  sonLevel:number;
  baseFolder:string;

  @Input() tagSection: Subject<string>;
  @Input() tagLevel: Subject<number>;
  @Input() tagItemId: Subject<number>;
  @Input() folder: Subject<string>;

  constructor(private activatedRoute: ActivatedRoute,
    private collection: CollectionServiceService, 
    private samples: SamplesServiceService,
    private tales: TalesServiceService, 
    private vPost: VpostServiceService,
    private store: StoreServiceService, 
    private alerts: AlertService, 
    private router: Router, 
    private enviromentVariables: EnviromentVariableServiceService,
    public config: ConfigServiceService
    ) {

    this.gallerylist = [];
    this.component = 'gallery'
    this.activatedRoute.params.subscribe(val => {
      if (val) {
        this.itemId = val.id;
        this.level = val.sonLevel;
        this.section = val.section;
        console.log(this.itemId);
        this.initGallery();
      }

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

    this.bottomTop = 0;
    this.isScrollable = true;
    let folder:any = JSON.parse(window.localStorage.getItem('folderByLevel'));
    this.baseFolder = folder.level_3;
  }


  initGallery() {
   
    if (this.level === 2) {
      if (this.section === 'vpost') {
        return this.getVpostGallery();
      }
      else if (this.section === 'tales') {
        return this.getTalesGallery();
      }
      else if (this.section === 'store') {
        return this.getStoreGallery();
      }
      else if (this.section === 'collection') {
        return this.getCollectionsGallery();
      }
      else if (this.section === 'samples') {
        return this.getOneSampleGallery();
      }
    }
    else if (this.level === "3") {
      if (this.section === 'collection') {
        return this.getPagesGallery();
      }
      else {
        return this.getSamplesGallery();
      }
    }
  }

  getVpostGallery() {
    this.vPost.getVposts(this.bottomTop, this.itemId).subscribe(
      data => {
        let result: any = data;
        this.gallerylist = [];
        this.vPost.vpostList = [];
        result.forEach(element => {
          if (result.length < 10) {
            this.isScrollable = false;
          }
          this.gallerylist.push(element);
          this.vPost.vpostList.push(element);
        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getTalesGallery() {
    this.tales.getTales(this.bottomTop, this.itemId).subscribe(
      data => {
        let result: any = data;
        this.gallerylist = [];
        this.tales.taleList = [];
        result.forEach(element => {
          if (result.length < 10) {
            this.isScrollable = false;
          }
          this.gallerylist.push(element);
          this.tales.taleList.push(element);
        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getStoreGallery() {
    this.store.getAds(this.bottomTop, this.itemId).subscribe(
      data => {
        let result: any = data;
        this.gallerylist = [];
        this.store.adList = [];
        result.forEach(element => {
          if (result.length < 10) {
            this.isScrollable = false;
          }
          this.gallerylist.push(element);
          this.store.adList.push(element);
        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getPagesGallery() {
    this.collection.getSectionCategory(this.itemId).subscribe(
      (data: any[]) => {
        this.gallerylist = [];
        data.forEach(element => {
          this.collection.getCategoryById(element.idCategoria).subscribe(
            data => {
              this.gallerylist.push(data);
              this.collection.collectionPagesList.push(data);
            }
          ), error => {
            this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
          }
        });


      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getSamplesGallery() {
    this.samples.getSamples(this.itemId).subscribe(
      (data: any[]) => {
        this.gallerylist = [];
        data.forEach(element => {
          this.samples.getSamplesGalleryById(element.idCategoriaEstampa).subscribe(
            data => {
              this.gallerylist.push(data);
              this.samples.samplesGalleryList.push(data);
            }
          ), error => {
            this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
          }
        });


      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getCollectionsGallery() {
    this.collection.getCollections(this.itemId).subscribe(
      data => {
        let result: any = data;
        this.gallerylist = [];
        this.collection.collectionList = [];
        result.forEach(element => {

          this.collection.getItem(element.idItem).subscribe(
            data=>{
              this.gallerylist.push(data);
              this.collection.collectionList.push(data);
              if (result.length < 10) {
                this.isScrollable = false;
              }
            },error=>{

            }
          )


        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getOneSampleGallery() {
    this.samples.getSamplesGalleries(this.itemId).subscribe(
      data => {
        let result: any = data;
        this.gallerylist = [];
        this.samples.samplesGalleryList = [];
        result.forEach(element => {
          if (result.length < 10) {
            this.isScrollable = false;
          }
          this.gallerylist.push(element);
          this.samples.samplesGalleryList.push(element);
        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  // getLevel() {
  //   let data = window.localStorage['level'];
  //   if (data) {
  //     data = JSON.parse(data);
  //     this.level = data;
  //   }
  // }

  onScroll(event: ScrollEvent) {
    if (event.isReachingBottom) {
      if (this.isScrollable) {
        this.bottomTop = this.bottomTop + 10;
        this.initGallery();
      }
    }
  }

  setSonLevel() {
    this.enviromentVariables.setLevel(this.level, this.component, this.section);
  }
  getSonLevel() {
    let data = window.localStorage['level'];
    if (data) {
      data = JSON.parse(data);
      this.sonLevel = data;
    }
  }


  ngOnInit(): void {
    this.bottomTop = 0;
    this.section = this.tagSection;
    this.level = this.tagLevel;
    this.itemId = this.tagItemId;
    this.foldername = this.folder;
    this.setSonLevel();
    this.getSonLevel();
    this.initGallery();

  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }



}
