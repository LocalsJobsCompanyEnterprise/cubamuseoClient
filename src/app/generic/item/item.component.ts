import { CollectionServiceService } from './../../core/service/collection-service.service';
import { VpostServiceService } from './../../core/service/vpost-service.service';
import { SamplesServiceService } from './../../core/service/samples-service.service';
import { AlertService } from './../../alert/alert.service';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  mySubscription: any;
  itemId: number;
  content: any;
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
        this.getVpostById();
      }else if(this.sectionId === 'samples'){
        this.getSampleById();
      }else{
        this.getCollectionById();
      }

     }

     getVpostById(){
      this.vPost.getItem(this.itemId).subscribe(
        data => {
          this.content = data;
        }, error => {
          this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
        }
      );
     }

     getSampleById(){
      this.samples.getItem(this.itemId).subscribe(
        data => {
          this.content = data;
        }, error => {
          this.alerts.error('Ha ocurrido un error verifique la conexion', 'error');
        }
      );
     }

     getCollectionById(){
      this.collection.getItem(this.itemId).subscribe(
        data => {
          this.content = data;
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
