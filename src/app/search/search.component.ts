import { Component, OnInit } from '@angular/core';
import { SpotyfyApiService } from '../spotyfy-api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchStr: string;
  constructor(private _apiService: SpotyfyApiService) { }

  ngOnInit() {
  }

  haeMusaa(){

    console.log(this.searchStr);

  }
}
