import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotyfyApiService {

  hakuUrl: string;
  constructor(private _HTTP: Http) {

console.log('Api Service käynistetty');



   }

  haku(hakuSana: string, type: string = 'artist' ){
    this.hakuUrl = 'https://api.spotify.com/v1/search?query=' + hakuSana + '&offset=0&limit=20&type=' + type;
    console.log(this.hakuUrl);
   return  this._HTTP.get(this.hakuUrl)
   .map(res => res.json());
  }

}
