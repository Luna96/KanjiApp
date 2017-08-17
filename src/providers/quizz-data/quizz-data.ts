import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuizzDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class QuizzDataProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello QuizzDataProvider Provider');
  }

  load(){
    if(this.data){
        return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
        this.http.get('assets/data/questions.json').map(res => res.json()).subscribe(data => {
            this.data = data.questions;
            resolve(this.data);
        });
    });
  }
}
