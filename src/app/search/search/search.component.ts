import { SearchServiceService } from './../../core/service/search-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', './search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string;
  isCollection: boolean;
  isModel: boolean;
  isStamp: boolean;
  isVPost: boolean;
  isShop: boolean;

  shopList: any[];
  collectionList: any[];
  modelList: any[];
  stampList: any[];
  vpostList: any[];
  constructor(private activatedRoute: ActivatedRoute,
    private searchService: SearchServiceService) {

    this.isCollection = true;
    this.isModel = true;
    this.isStamp = true;
    this.isVPost = false;
    this.isShop = false;

    this.shopList = [];
    this.collectionList = [];
    this.modelList = [];
    this.stampList = [];
    this.vpostList = [];

    this.activatedRoute.params.subscribe(val => {
      if (val.query) {
        this.query = val.query;
        this.search()
      }
    });
  }

  ngOnInit(): void {

  }

  search() {
    this.searchInShop();
    this.searchInStamp();
    this.searchInModel();
    this.searchIInCollectionsSection();
  }

  searchInShop() {
    this.shopList = [];
      this.searchService.findInShop(this.query).subscribe(
        (data: any[]) => {
          data.forEach(element => {
            this.shopList.push(element)
          });
        }, error => {

        }
      )
  }

  searchInText() {

    this.searchService.findInText(this.query).subscribe(
      (data: any[]) => {
        data.forEach(element => {

        });
      }, error => {

      }
    )
  }

  searchInModel() {
    if (this.isModel)
      this.searchService.findInModel(this.query).subscribe(
        (data: any[]) => {
          data.forEach(element => {
            this.modelList.push(element);
          });
        }, error => {

        }
      )
  }

  searchInStamp() {
    if (this.isStamp)
      this.searchService.findInStamp(this.query).subscribe(
        (data: any[]) => {
          data.forEach(element => {
            this.stampList.push(element);
          });
        }, error => {

        }
      )
  }

  searchInCollectionsCategory() {
    if (this.isCollection)
      this.searchService.findInCollectionsCategory(this.query).subscribe(
        (data: any[]) => {
          data.forEach(element => {
            this.collectionList.push(element)
          });
        }, error => {

        }
      )
  }

  searchIInCollectionsSection() {
    if (this.isCollection)
      this.searchService.findInCollectionsSection(this.query).subscribe(
        (data: any[]) => {
          data.forEach(element => {
            this.collectionList.push(element);
          });
          this.searchInCollectionsCategory();
        }, error => {

        }
      )
  }

  cleanString(data: string) {
    let aux = data;
    let res = aux.replace(this.query, '<span>' + this.query + '</span>');

    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      if (element == this.query[0]) {
        let part = res.slice(i, i+ this.query.length)
        if ( part == this.query) {
          if (i > 20)
            res = res.slice(i - 20, i + 200)
          else
            res = res.slice(0, 200)
        }
      }
    }

    return res;
  }



}
