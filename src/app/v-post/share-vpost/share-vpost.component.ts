import { ConfigServiceService } from './../../core/service/config-service.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AlertService } from './../../alert/alert.service';
import { VpostServiceService } from './../../core/service/vpost-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-vpost',
  templateUrl: './share-vpost.component.html',
  styleUrls: ['./share-vpost.component.css']
})
export class ShareVpostComponent implements OnInit {
  
  mySubscription: any;
  itemId: number;
  vpost: any;
  foldername: any;
  section: any;
  sonLevel:number;
  category:any;

  constructor(private activatedRoute: ActivatedRoute, 
    private post: VpostServiceService,  
    private alerts: AlertService, 
    private router: Router, 
    public config: ConfigServiceService) { 

      this.activatedRoute.params.subscribe(val => {
        this.itemId = val.id;
        this.section = val.section;
        this.sonLevel = val.sonLevel;
        if (val.foldername) {
          this.foldername = val.foldername;
        }
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
      this.post.getVpostById(this.itemId).subscribe(
        (data:any) => {
          this.vpost = data;
          this.post.getVpostCategoryById(data.idCategoria).subscribe(
            data => {
              this.category = data;
            }         
          );
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
