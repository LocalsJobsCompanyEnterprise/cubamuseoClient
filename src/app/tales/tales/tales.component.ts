import { EnviromentVariableServiceService } from './../../core/service/enviroment-variable-service.service';
import { AlertService } from './../../alert/alert.service';
import { TalesServiceService } from './../../core/service/tales-service.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tales',
  templateUrl: './tales.component.html',
  styleUrls: ['./tales.component.css']
})
export class TalesComponent implements OnInit {

  mySubscription: any;
  itemId: number;
  tale: any;

  constructor(private activatedRoute: ActivatedRoute, private tales: TalesServiceService,  
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
      this.tales.getTaleById(this.itemId).subscribe(
        data => {
          this.tale = data;
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
