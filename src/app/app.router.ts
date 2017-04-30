import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {AboutComponent} from './about/about.component';


export const router: Routes = [
    { path: '', redirectTo:'search', pathMatch:'full' },
    { path: 'search',  component: SearchComponent},
      { path: 'about',  component: AboutComponent}



];
