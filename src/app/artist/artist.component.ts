import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotyfyApiService } from '../spotyfy-api.service';
import { Artisti } from '../classses/Artisti';
import { Albumi } from '../classses/Albumi';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  
  id: string;
  artist: Artisti[];
  albums: Albumi[];

  constructor(
        private _apiService: SpotyfyApiService,
        private _route: ActivatedRoute) { 

        }

  ngOnInit() {
     


     this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._apiService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                      console.log(this.artist);
                
                })
                 /*
                this._apiService.getAlbumit(id)
                    .subscribe(albums => {
                        this.albumit = albums.items;
                    })*/
            })

// console.log(this.artist);
}



}