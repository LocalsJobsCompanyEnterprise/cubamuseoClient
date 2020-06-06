import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigServiceService } from './config-service.service';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(public http: HttpClient, private config: ConfigServiceService) {

  }

  findInText(query) {
    return this.http.get(this.config.serverNodeLocation + 'inText/' + query)
  }

  findInShop(query) {
    return this.http.get(this.config.serverNodeLocation + 'inShop/' + query)
  }

  findInModel(query) {
    return this.http.get(this.config.serverNodeLocation + 'inStamp/' + query)
  }

  findInStamp(query) {
    return this.http.get(this.config.serverNodeLocation + 'inModel/' + query)
  }

  findInCollectionsCategory(query) {
    return this.http.get(this.config.serverNodeLocation + 'inCollectionCategory/' + query)
  }

  findInCollectionsSection(query) {
    return this.http.get(this.config.serverNodeLocation + 'inCollectionSection/' + query)
  }
  
}
