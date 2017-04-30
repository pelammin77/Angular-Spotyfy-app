import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {SearchComponent} from './search/search.component';
import {AboutComponent} from './about/about.component';


export const router: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch:'full' },
    { path: 'welcome',  component: WelcomeComponent},
    { path: 'search',  component: SearchComponent},
    { path: 'about',  component: AboutComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
