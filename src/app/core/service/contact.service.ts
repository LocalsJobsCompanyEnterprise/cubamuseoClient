import { ConfigServiceService } from 'src/app/core/service/config-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public http: HttpClient, private config: ConfigServiceService) { }

  sendEmail(data) {
    return this.http.post(this.config.serverNodeLocation + 'mail', {data});
  }
}
