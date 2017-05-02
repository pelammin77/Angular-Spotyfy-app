import { Component, OnInit } from '@angular/core';
import { SpotyfyApiService } from '../spotyfy-api.service';
import 'rxjs/Rx';
import {Artisti} from '../classses/Artisti';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  hakutulokset: Artisti[] = new Array();
  constructor(private _apiService: SpotyfyApiService) { }

  ngOnInit() {
  }

  haeMusaa(){
    this._apiService.haku(this.searchStr)
            .subscribe(res => {
                this.hakutulokset =  res.artists.items;

})

  
  }
}
