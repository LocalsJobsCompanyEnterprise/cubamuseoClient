import { Injectable } from '@angular/core';
import Settings from '../../../assets/setting.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  public serverNodeLocation;
  constructor() {
    this.serverNodeLocation = Settings.settings.ServerNodeLocation;
   }
}
