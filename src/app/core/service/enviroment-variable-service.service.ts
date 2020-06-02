import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentVariableServiceService {

  constructor() {
  }

  setCategory(category) {
    window.localStorage.setItem('category', category);
  }

  setLevel(fatherLevel, father, section) {

    if (section === 'vpost' || section === 'tales' || section === 'store') {
      if (father === 'category') {
        window.localStorage.setItem('level', '2');
      }
      else {
        window.localStorage.setItem('level', '1');
      }
    }
    if (section === 'collection' || section === 'samples') {
      if (father === 'category') {
        window.localStorage.setItem('level', '3');
      }
      else if (father === 'text' && fatherLevel === 3) {
        window.localStorage.setItem('level', '2');
      }
      else if (father === 'gallery' && fatherLevel === 3) {
        window.localStorage.setItem('level', '2');
      }
      else {
        window.localStorage.setItem('level', '2');
      }

    }
  }
}
