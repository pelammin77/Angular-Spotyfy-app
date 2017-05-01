import { Injectable } from '@angular/core';

@Injectable()
export class SpotyfyApiService {

  hakuUrl: string;
  constructor() {

console.log('Api Service käynistetty');



   }

  haku(hakuSana: string, type:string = 'artist' ){
    this.hakuUrl = 'https://api.spotify.com/v1/search?query=' + hakuSana + '&offset=0&limit=20&type=' + type;
    console.log(this.hakuUrl); 

  }

}
