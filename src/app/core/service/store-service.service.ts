import { ConfigServiceService } from './config-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {
  adList: any;
  storeCategoryList: any;

  constructor(public http: HttpClient, private config: ConfigServiceService) {
    this.storeCategoryList = [];
    this.adList = [];
   }

   getStoreHome(id) {
    return this.http.get(this.config.serverNodeLocation + 'api/store/getHome/' + id);
  }

   getAdById(id) {
    return this.http.get(this.config.serverNodeLocation + 'api/store/getOne/' + id);
  }

  getAds(offset, id) {
    return this.http.post(this.config.serverNodeLocation + 'api/store/getWith' , {id, offset});
  }

   getAdCategoryById(id) {
    return this.http.get(this.config.serverNodeLocation + 'api/store/getOneCategory/' + id);
  }

  getAdsCategories() {
    return this.http.get(this.config.serverNodeLocation + 'api/store/getCategories');
  }
}
