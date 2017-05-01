import { Component } from '@angular/core';
import { SpotyfyApiService } from './spotyfy-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotyfyApiService]
})
export class AppComponent {
}
