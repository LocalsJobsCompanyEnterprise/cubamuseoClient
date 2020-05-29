import { StoreServiceService } from './../../core/service/store-service.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AlertService } from './../../alert/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-purchase',
  templateUrl: './ad-purchase.component.html',
  styleUrls: ['./ad-purchase.component.css']
})
export class AdPurchaseComponent implements OnInit {

  mySubscription: any;
  itemId: number;
  ad: any;

  constructor(private activatedRoute: ActivatedRoute, private store: StoreServiceService,  
    private alerts: AlertService, private router: Router) {

      this.activatedRoute.params.subscribe(val => {
        this.itemId = val.id;
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
      this.store.getAdById(this.itemId).subscribe(
        data => {
          this.ad = data;
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