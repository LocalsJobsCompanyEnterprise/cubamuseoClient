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
itemId: number;
section:any;
mySubscription: any;
fatherLevel: number;
father: any;
level: number;
bottomTop = 0;
limit = 10;
isScrollable: boolean = true;
component: 'gallery';
@Input() tagSection: Subject <string>;
@Input() tagFatherLevel: Subject <number>;
@Input() tagFather: Subject <number>;
@Input() tagItemId: Subject <number>;
 
constructor(private activatedRoute: ActivatedRoute, private collection: CollectionServiceService, private samples: SamplesServiceService,
  private tales: TalesServiceService, private vPost: VpostServiceService,
  private store: StoreServiceService, private alerts: AlertService, private router: Router, private enviromentVariables: EnviromentVariableServiceService) {
  
  this.gallerylist = [];  
  this.tagSection = new Subject <string>();
  this.tagFatherLevel = new Subject <number>();
  this.tagFather = new Subject <number>();
  this.tagItemId = new Subject <number>();
  

  this.activatedRoute.params.subscribe(val => {
    if(val){
      this.itemId = val.id;
      this.fatherLevel = val.level;
      this.father = val.component;
      this.section = val.section;
      console.log(this.itemId);
    }
    else{
    this.tagSection.subscribe(
        data =>{
          this.section=data;
        });
    this.tagFather.subscribe(
          data =>{
            this.father=data;
          });
    this.tagFatherLevel.subscribe(
          data =>{
              this.fatherLevel=data;
          });
    this.tagItemId.subscribe(
          data =>{
              this.itemId=data;
          });
    }
    
  });
  
  this.initGallery();

  this.router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
  };
  
  this.mySubscription = this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      // Trick the Router into believing it's last link wasn't previously loaded
      this.router.navigated = false;
    }
  });

  this.enviromentVariables.setLevel(this.fatherLevel ,this.father , this.section);
  this.bottomTop = 0;
  this.isScrollable = true;
  
}


initGallery(){
  this.getLevel();
  if(this.level===1){
    if(this.section === 'vpost'){
      return this.getVpostGallery();
    }
    else if(this.section === 'tales'){
      return this.getTalesGallery();
    }
    else if(this.section === 'store'){
      return this.getStoreGallery();
    }
    else if (this.section === 'collection'){
      return this.getCollectionsGallery();
    }
    else if (this.section === 'samples'){
      return this.getOneSampleGallery();
    }
  }
  else if(this.level===2){
     if(this.section === 'collection'){
      return this.getPagesGallery();
    }
    else {
      return this.getSamplesGallery();
    }
  }
}

getVpostGallery(){
  this.vPost.getVposts(this.bottomTop,this.itemId).subscribe(
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

getTalesGallery(){
  this.tales.getTales(this.bottomTop,this.itemId).subscribe(
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

getStoreGallery(){
  this.store.getAds(this.bottomTop,this.itemId).subscribe(
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

getPagesGallery(){
  this.collection.getCollectionPages(this.bottomTop,this.itemId).subscribe(
    data => {
      let result: any = data;
      this.gallerylist = [];
      this.collection.collectionPagesList = [];
      result.forEach(element => {
        if (result.length < 10) {
          this.isScrollable = false;
        }
        this.gallerylist.push(element);
        this.collection.collectionPagesList.push(element);
      });

    }, error => {
      this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
    }
  );
}

getSamplesGallery(){
  this.samples.getSamples(this.bottomTop,this.itemId).subscribe(
    data => {
      let result: any = data;
      this.gallerylist = [];
      this.samples.samplesList = [];
      result.forEach(element => {
        if (result.length < 10) {
          this.isScrollable = false;
        }
        this.gallerylist.push(element);
        this.samples.samplesList.push(element);
      });

    }, error => {
      this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
    }
  );
}

getCollectionsGallery(){
  this.collection.getCollections(this.bottomTop,this.itemId).subscribe(
    data => {
      let result: any = data;
      this.gallerylist = [];
      this.collection.collectionList = [];
      result.forEach(element => {
        if (result.length < 10) {
          this.isScrollable = false;
        }
        this.gallerylist.push(element);
        this.collection.collectionList.push(element);
      });

    }, error => {
      this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
    }
  );
}

getOneSampleGallery(){
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

getLevel(){
  let data = window.localStorage['level'];
  if(data){
    data = JSON.parse(data);
    this.level = data;
  }
}

onScroll(event: ScrollEvent) {
  if (event.isReachingBottom) {
    if (this.isScrollable) {
      this.bottomTop = this.bottomTop + 10;
      this.initGallery(); 
    }
  }
}

ngOnInit(): void {
  this.bottomTop = 0;
}

ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}



}
