import { AlertService } from './alert/alert.service';
import { ContactService } from './core/service/contact.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  contactForm;
  $: any;
  constructor(
    public translate: TranslateService,
    public modalService: NgbModal,
    private router: Router,
    private alerts: AlertService,
    private mail: ContactService,
    private formBuilder: FormBuilder
  ) {

    this.categoryType = new Subject<string>();
    this.query = '';
    this.contactForm = this.formBuilder.group({
      email: '',
      name: '',
      text: ''
    });
    // this.setCategory();
    // this.getCategory(); 
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es');

  }

  onSubmit(customerData) {

    this.mail.sendEmail(customerData).subscribe(
      data => {
        if(data="Success")
        this.modalService.dismissAll('Cross click')
        this.alerts.success('El mensaje se ha enviado correctamente');
      }, error => {
        this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
      }
    );
    console.warn('Contact form content', customerData)
    // this.$('#contact').modal('hide');
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
