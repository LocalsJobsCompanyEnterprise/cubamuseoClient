import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentVariableServiceService {

  constructor() { 
  }

 

  setLevel(fatherLevel, father, section){

    if(section === 'vpost' || section === 'tales' || section === 'store'){
      if(father === 'start'){
        window.localStorage.setItem('level','2');
      }
      else if(father === 'category'){
        window.localStorage.setItem('level', '1');
      }
      else if(father === 'gallery'){
        window.localStorage.setItem('level', '0');
      }
      else{
        window.localStorage.setItem('level', '3');
      }

    }
    if(section === 'collection' || section === 'samples'){
      if(father === 'start'){
        window.localStorage.setItem('level','3');
      }
      else if(father === 'category'){
        window.localStorage.setItem('level','2');
      }
      else if(father === 'gallery' && fatherLevel === '2'){
        window.localStorage.setItem('level','1');
      }
      else if(father === 'gallery' && fatherLevel === '1'){
        window.localStorage.setItem('level','0');
      }
      else{
        window.localStorage.setItem('level','4');
      }

    }

  }
}
