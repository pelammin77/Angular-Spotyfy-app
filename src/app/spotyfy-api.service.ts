import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotyfyApiService {

  hakuUrl: string;
  artistUrl: string;
  albumitUrl: string;
  albumiUrl: string;

  constructor(private _HTTP: Http) {

console.log('Api Service käynistetty');



   }

  haku(hakuSana: string, type: string = 'artist' ){
    this.hakuUrl = 'https://api.spotify.com/v1/search?query=' + hakuSana + '&offset=0&limit=20&type=' + type + '&market=FI';
   return  this._HTTP.get(this.hakuUrl)
   .map(res => res.json());
  }

  getArtist(id){
    
     console.log('Artistin tietojen haku palvelua kutsuttiin');
      this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
      console.log(this.artistUrl);
    return  this._HTTP.get(this.artistUrl)
   .map(res => res.json());
  }

  getAlbumit(artistinId){
    console.log("haetaan albumit");
 this.albumitUrl = 'https://api.spotify.com/v1/artists/'+artistinId+'/albums';
 console.log(this.albumitUrl);
 return  this._HTTP.get(this.albumitUrl)
   .map(res => res.json());
  }
    getAlbumi(albuminId){
      this.albumiUrl = 'https://api.spotify.com/v1/albums/'+ albuminId;
        return this._HTTP.get(this.albumiUrl)
            .map(res => res.json());
    }

}
