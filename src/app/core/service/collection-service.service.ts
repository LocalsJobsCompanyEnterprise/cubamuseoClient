import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigServiceService } from './config-service.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionServiceService {
  collectionList: any;
  collectionCategoryList: any;
  collectionPagesList: any;

  constructor(public http: HttpClient, private config: ConfigServiceService) {
    this.collectionList = [];
    this.collectionCategoryList = [];
    this.collectionPagesList = [];
   }
   //Texto e imagen de inicio de las colecciones
   getCollectionHome(id) {
    return this.http.get(this.config.serverNodeLocation + 'text/' + id);
  }

  getCategoryById(id) {
     return this.http.get(this.config.serverNodeLocation + 'category/' + id);
   }

   getSectionById(id){
    return this.http.get(this.config.serverNodeLocation + 'section/' + id);
   }


   getItem(id){
    return this.http.get(this.config.serverNodeLocation + 'item/' + id);
   }


   getCollections(id) {
     return this.http.get(this.config.serverNodeLocation + 'category-item/byCategory/' + id);
   }


  getSectionByCategory(id){
    return this.http.get(this.config.serverNodeLocation + 'section-category/byCategory/' + id);
   }


  getSectionCategory(id){
    return this.http.get(this.config.serverNodeLocation + 'section-category/bySection/'+ id);
  }
  
  getCollectionsCategories() {
    return this.http.get(this.config.serverNodeLocation + 'section');
  }
}
