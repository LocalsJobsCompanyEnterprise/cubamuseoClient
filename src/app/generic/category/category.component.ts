import { ConfigServiceService } from 'src/app/core/service/config-service.service';
import { EnviromentVariableServiceService } from './../../core/service/enviroment-variable-service.service';
import { AlertService } from './../../alert/alert.service';
import { StoreServiceService } from './../../core/service/store-service.service';
import { VpostServiceService } from './../../core/service/vpost-service.service';
import { TalesServiceService } from './../../core/service/tales-service.service';
import { SamplesServiceService } from './../../core/service/samples-service.service';
import { CollectionServiceService } from './../../core/service/collection-service.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  categoryList: any[];
  category: string;
  fatherLevel: number;
  father: 'start';
  level: number;

  component: string;
  sonLevel: number;

  active:boolean;



  @Input() categoryType: Subject<string>;

  carouselOptions = {
    loop: true,
    margin: 10,
    navSpeed: 1000,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
        loop: true,
        autoplayHoverPause: true,
      },
      500: {
        items: 3,
        nav: true,
        loop: true,
        autoplayHoverPause: true,
      },
      600: {
        items: 4,
        nav: true,
        loop: true,
        autoplayHoverPause: true,
      },
      800: {
        items: 4,
        nav: true,
        loop: true,
        autoplayHoverPause: true,
      },
      1024: {
        items: 4,
        nav: true,
        loop: true,
        autoplayHoverPause: true,
      },
      1200: {
        items: 5,
        nav: true,
        loop: true,
        autoplayHoverPause: true,
      },
      1920: {
        items: 6,
        nav: true,
        loop: true,
        autoplayHoverPause: true,
      }
    }
  }


  constructor(
    private route: Router, 
    private collection: CollectionServiceService,
    private samples: SamplesServiceService,
    private tales: TalesServiceService, 
    private vPost: VpostServiceService,
    private store: StoreServiceService, 
    private alerts: AlertService, 
    private enviromentVariables: EnviromentVariableServiceService,
    public config: ConfigServiceService
    ) {

    this.component = 'category'
    this.categoryList = [];
    this.active = false
  }


  getLevel() {
    if (this.categoryType)
      if (this.category === "collection" || this.category === "samples") {
        this.level = 3;
      }
      else {
        this.level = 2;
      }
  }

  changeCategoryStorage(category: string) {    
      if (category)
        this.enviromentVariables.setCategory(category);
      else {
        let actual = window.localStorage['category'];
        if (actual)
          this.enviromentVariables.setCategory(actual);
      }
    
  }

  // setCategory() {

  //   let cat = window.localStorage.getItem('category');
  //   if (cat) {

  //   }
  //   if (this.route.url === '/') {
  //     this.enviromentVariables.setCategory('null');
  //   }
  //   else {
  //     this.enviromentVariables.setCategory(this.category);
  //   }

  // }

  getCategory() {
    let data = window.localStorage['category'];
    if (data) {
      this.category = data;
    }

  }

  setCategory() {
    if (window.location.href === 'http://localhost:4200/') {
      this.enviromentVariables.setCategory('collection');
    }else{
      let actual = window.localStorage['category'];
      if (!actual){
        this.enviromentVariables.setCategory('collection');
      }       
    }     
  }


  initCategories() {

    switch (this.category) {
      case "collection": {
        return this.getCategoryListCollection();
      }
      case "samples": {
        return this.getCategoryListSamples();
      }
      case "tales": {
        return this.getCategoryListSamples();
      }
      case "vpost": {
        return this.getCategoryListVpost();
      }
      case "store": {
        return this.getCategoryListStore();
      }
    }

  }

  getCategoryListCollection() {
    this.collection.getCollectionsCategories().subscribe(
      data => {
        let result: any = data;
        this.categoryList = [];
        this.collection.collectionCategoryList = [];

        result.forEach(element => {
          this.categoryList.push(element);
          this.collection.collectionCategoryList.push(element);
        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getCategoryListSamples() {
    this.samples.getSamplesCategories().subscribe(
      data => {
        let result: any = data;
        this.categoryList = [];
        this.samples.samplesCategoryList = [];

        result.forEach(element => {
          this.categoryList.push(element);
          //this.samples.samplesCategoryList.push(element);
        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getCategoryListTales() {
    this.tales.getTalesCategories().subscribe(
      data => {
        let result: any = data;
        this.categoryList = [];
        this.tales.taleCategoryList = [];

        result.forEach(element => {
          this.categoryList.push(element);
          //this.tales.taleCategoryList.push(element);
        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }

  getCategoryListVpost() {
    this.vPost.getVpostCategories().subscribe(
      data => {
        let result: any = data;
        this.categoryList = [];
        this.vPost.vpostCategoryList = [];

        result.forEach(element => {
          this.categoryList.push(element);
          this.vPost.vpostCategoryList.push(element);
        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
  }
  getCategoryListStore() {
    this.store.getStoreCategories().subscribe(
      data => {
        let result: any = data;
        this.categoryList = [];
        this.store.storeCategoryList = [];

        result.forEach(element => {
          this.categoryList.push(element);
          this.store.storeCategoryList.push(element);
        });

      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
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

  ngOnInit(): void {

    this.categoryType.subscribe(
      data => {
        if (data)
          this.category = data;
        this.setCategory();
        this.changeCategoryStorage(this.category);
        this.getCategory();
        this.initCategories();
        this.getLevel();
        this.setSonLevel();
        this.getSonLevel();
      }
    );
    this.setCategory();
    this.getCategory();
    this.initCategories();
    this.getLevel();
    this.setSonLevel();
    this.getSonLevel();

  }

}
