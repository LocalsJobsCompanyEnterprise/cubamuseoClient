import { SearchServiceService } from './../../core/service/search-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  isCollection: boolean;
  isModel: boolean;
  isStamp: boolean;
  isVPost: boolean;
  isShop: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private searchService: SearchServiceService) {
      
    this.isCollection = true;
    this.isModel = true;
    this.isStamp = true;
    this.isVPost = false;
    this.isShop = false;

    this.activatedRoute.params.subscribe(val => {
      if (val.query) {
        this.query = val.query;
      }
    });
  }

  ngOnInit(): void {

  }

  search(query) {

  }

  searchInShop() {
    if (this.isShop)
      this.searchService.findInShop(this.query).subscribe(
        data => {

        }, error => {

        }
      )
  }

  searchInText() {

    this.searchService.findInText(this.query).subscribe(
      data => {

      }, error => {

      }
    )
  }

  searchInModel() {
    if (this.isModel)
      this.searchService.findInModel(this.query).subscribe(
        data => {

        }, error => {

        }
      )
  }

  searchInStamp() {
    if (this.isStamp)
      this.searchService.findInStamp(this.query).subscribe(
        data => {

        }, error => {

        }
      )
  }

  searchInCollectionsCategory() {
    if (this.isCollection)
      this.searchService.findInCollectionsCategory(this.query).subscribe(
        data => {

        }, error => {

        }
      )
  }

  searchIInCollectionsSection() {
    if (this.isCollection)
      this.searchService.findInCollectionsSection(this.query).subscribe(
        data => {

        }, error => {

        }
      )
  }

}
