import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the KunyomiDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class KunyomiDataProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello KunyomiDataProvider Provider');
  }

  load(){
    if(this.data){
        return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
        this.http.get('assets/data/kunyomiquestions.json').map(res => res.json()).subscribe(data => {
            this.data = data.questions;
            resolve(this.data);
        });
    });
  }

}
