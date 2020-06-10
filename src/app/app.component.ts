import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'CubamuseoClientV1';
  categoryType: Subject<string>;
  closeResult = '';
  url: any;
  query: string;

  constructor(
    public translate: TranslateService,
    public modalService: NgbModal,
    private router: Router
  ) {
    this.categoryType = new Subject<string>();
    this.query = '';
    // this.setCategory();
    // this.getCategory(); 
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es');

  }

  

  search() {
    this.router.navigate(['search', this.query])
  }

  change(language) {
    this.translate.use(language);
  }

  // setCategory() {

  //   let data = window.localStorage['category'];
  //   if (data === undefined) {
  //     console.log('funciona');
  //     this.categoryType.next('collection');
  //     this.enviromentVariables.setCategory('collection');
  //   }
  //   else {
  //     let data = window.localStorage['category'];
  //     if (data) {
  //       this.enviromentVariables.setCategory(data);
  //     }
  //   }
  // }

  // getCategory() {
  //   let data = window.localStorage['category'];
  //   if (data) {
  //     this.categoryType.next(data);
  //   }
  // }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  ngOnInit() {

  }

}
