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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
  foldername: any;
  sonLevel: number;
  baseFolder: string;
  actualItem: any;
  $: any;
  isParams: boolean;

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
    public config: ConfigServiceService,
    public modalService: NgbModal
  ) {

    this.gallerylist = [];
    this.component = 'gallery'
    this.isParams = false;
    this.activatedRoute.params.subscribe(val => {
      if (val) {
        this.itemId = val.id;
        this.level = parseInt(val.sonLevel);
        this.section = val.section;
        if (val.foldername) {
          this.foldername = val.foldername;
        }

        this.initGallery();
        this.setSonLevel();
        this.getSonLevel();
        this.isParams = true;
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
    let folder: any = JSON.parse(window.localStorage.getItem('folderByLevel'));
    this.baseFolder = folder.level_3;
  }

  open(content,item) {
    this.actualItem = item;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  next(content) {
    for (let index = 0; index < this.gallerylist.length; index++) {
      const element = this.gallerylist[index];
      if (element.idItem === this.actualItem.idItem) 
      {
        if (index === this.gallerylist.length - 1){
          this.actualItem = this.gallerylist[0];
          this.$('#itemModal').modal('hide');
          this.open(content,this.actualItem);
        }
        else{
          this.actualItem = this.gallerylist[index + 1];
          this.$('#itemModal').modal('hide');
          this.open(content,this.actualItem);
        }
        
      }
    }
  }

  preview(content) {
    for (let index = 0; index < this.gallerylist.length; index++) {
      const element = this.gallerylist[index];
      if (element.idItem === this.actualItem.idItem) {
        if(index === 0){
          this.actualItem = this.gallerylist[this.gallerylist.length-1];
          this.$('#itemModal').modal('hide');
          this.open(content,this.actualItem);
        }else{
          this.actualItem = this.gallerylist[index - 1];
          this.$('#itemModal').modal('hide');
          this.open(content,this.actualItem);
        }
        
      }
    }
  }

  nextVpost(content) {
    for (let index = 0; index < this.gallerylist.length; index++) {
      const element = this.gallerylist[index];
      if (element.idPostal === this.actualItem.idPostal) {
        if (index === this.gallerylist.length - 1){
          this.actualItem = this.gallerylist[0];
          this.$('#vpostModal').modal('hide');
          this.open(content,this.actualItem);
        }
        else{
          this.actualItem = this.gallerylist[index + 1];
          this.$('#vpostModal').modal('hide');
          this.open(content,this.actualItem);
        }
      }
    }
  }

  previewVpost(content) {
    for (let index = 0; index < this.gallerylist.length; index++) {
      const element = this.gallerylist[index];
      if (element.idPostal === this.actualItem.idPostal) {
        if(index === 0){
          this.actualItem = this.gallerylist[this.gallerylist.length-1];
          this.$('#vpostModal').modal('hide');
          this.open(content,this.actualItem);
        }else{
          this.actualItem = this.gallerylist[index - 1];
          this.$('#vpostModal').modal('hide');
          this.open(content,this.actualItem);
        }
      }
    }
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
    else if (this.level === 3) {
      if (this.section === 'collection') {
        return this.getPagesGallery();
      }
      else {
        return this.getSamplesGallery();
      }
    }
  }

  getVpostGallery() {
    this.vPost.getVposts(this.itemId).subscribe(
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
    this.tales.getTalesByCategory(this.itemId).subscribe(
      data => {
        let result: any = data;
        this.gallerylist = [];
        this.tales.taleList = [];
        result.forEach(element => {
          this.tales.getTaleById(element.idEstampa).subscribe(
            data => {
              this.gallerylist.push(data);
              this.tales.taleList.push(data);
            }, error => {

            }
          )
          if (result.length < 10) {
            this.isScrollable = false;
          }

        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getStoreGallery() {
    this.store.getAdsByTematic(this.itemId).subscribe(
      data => {
        let result: any = data;
        this.gallerylist = [];
        this.store.adList = [];
        result.forEach(element => {
          this.store.getAdById(element.idItem).subscribe(
            data => {
              this.gallerylist.push(data);
              this.store.adList.push(data);
            }, error => {

            }
          )
          if (result.length < 10) {
            this.isScrollable = false;
          }

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
    this.samples.getSamplesCategory(this.bottomTop, this.itemId).subscribe(
      data => {
        let result: any = data;
        this.gallerylist = [];
        this.samples.samplesList = [];
        result.forEach(element => {
          this.samples.getSampleById(element.idMuestra).subscribe(
            data => {
              this.gallerylist.push(data);
              this.samples.samplesList.push(data);
            }, error => {

            }
          )
          if (result.length < 10) {
            this.isScrollable = false;
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
            data => {
              this.gallerylist.push(data);
              this.collection.collectionList.push(data);
              if (result.length < 10) {
                this.isScrollable = false;
              }
            }, error => {

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
          this.collection.getItem(element.idItem).subscribe(
            data => {
              this.gallerylist.push(data);
              this.samples.samplesGalleryList.push(data);
            }, error => {

            }
          )
          if (result.length < 10) {
            this.isScrollable = false;
          }

        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  checkIfIsEmpty(elementToCheck:string) {
    let isEmpty: boolean;
    isEmpty = false;
    elementToCheck = elementToCheck.trim()
    if(elementToCheck.length == 0) {
      isEmpty = true;
    }
    return isEmpty;
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
    if (this.tagSection)
      this.section = this.tagSection;
    if (this.tagLevel)
      this.level = this.tagLevel;
    if (this.tagItemId)
      this.itemId = this.tagItemId;
    if (this.folder)
      this.foldername = this.folder;

    if (this.tagSection && !this.isParams) {
      this.setSonLevel();
      this.getSonLevel();
      this.initGallery();
    }


  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }



}
