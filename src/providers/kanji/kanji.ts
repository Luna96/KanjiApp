import { Injectable } from '@angular/core';
import { Http, Response , RequestOptionsArgs, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the KanjiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class KanjiProvider {

  private url: string = "https://kanjialive-api.p.mashape.com/api/public/kanji/";

  constructor(public http: Http) {
    console.log('Hello KanjiProvider Provider');
  }

  getKanji(asdf: string){

    let headers = new Headers();

    headers.set("X-Mashape-Key","ywVo02KVQRmshmb9UTAex1RYCmO2p1CDeiWjsn6lU5HNFA8SFD")

    return this.http.get(this.url + asdf, {headers:headers})
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError)
  }

  private catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error || "Server Error.")
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  private extractData(res: Response) {
    return res.json();
  }

}
