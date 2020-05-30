import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigServiceService } from './config-service.service';

@Injectable({
  providedIn: 'root'
})
export class VpostServiceService {
  vpostList: any;
  vpostCategoryList: any;

  constructor(public http: HttpClient, private config: ConfigServiceService) {
    this.vpostCategoryList = [];
    this.vpostList = [];
   }

   getVpostHome(id) {
    return this.http.get(this.config.serverNodeLocation + 'api/vpost/getHome/' + id);
  }
   getVpostById(id) {
    return this.http.get(this.config.serverNodeLocation + 'api/vpost/getOne/' + id);
  }

  getItem(id){
    return this.http.get(this.config.serverNodeLocation + 'api/vpost/getItem/' + id);
   }

  getImage(id){
    return this.http.get(this.config.serverNodeLocation + 'api/vpost/getItemImage/' + id);
   }

  getVposts(offset, id) {
    return this.http.post(this.config.serverNodeLocation + 'api/vpost/getWith' , {id, offset});
  }

   getVpostCategoryById(id) {
    return this.http.get(this.config.serverNodeLocation + 'api/vpost/getOneCategory/' + id);
  }

  getVpostCategories() {
    return this.http.get(this.config.serverNodeLocation + 'category-postal');
  }
}
