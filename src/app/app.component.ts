import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SpotyfyApiService } from './spotyfy-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotyfyApiService, HttpModule ]})
export class AppComponent {
}
