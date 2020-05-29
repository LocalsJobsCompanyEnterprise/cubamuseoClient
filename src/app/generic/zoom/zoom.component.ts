import { AlertService } from './../../alert/alert.service';
import { VpostServiceService } from './../../core/service/vpost-service.service';
import { SamplesServiceService } from './../../core/service/samples-service.service';
import { CollectionServiceService } from './../../core/service/collection-service.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {

  mySubscription: any;
  itemId: number;
  image: any;
  sectionId: any

  constructor(private activatedRoute: ActivatedRoute, private collection: CollectionServiceService,
     private samples: SamplesServiceService, private vPost: VpostServiceService,  
    private alerts: AlertService, private router: Router) {

      this.activatedRoute.params.subscribe(val => {
        this.itemId = val.id;
        this.sectionId = val.section;

      });
      this.initContent();
      
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
     }

     initContent(){
      if(this.sectionId === 'vpost'){
        this.getVpostImageById();
      }else if(this.sectionId === 'samples'){
        this.getSampleImageById();
      }else{
        this.getCollectionImageById();
      }

     }

     getVpostImageById(){
      this.vPost.getImage(this.itemId).subscribe(
        data => {
          this.image = data;
        }, error => {
          this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
        }
      );
     }

     getSampleImageById(){
      this.samples.getImage(this.itemId).subscribe(
        data => {
          this.image = data;
        }, error => {
          this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
        }
      );
     }

     getCollectionImageById(){
      this.collection.getImage(this.itemId).subscribe(
        data => {
          this.image = data;
        }, error => {
          this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
        }
      );
     }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}
