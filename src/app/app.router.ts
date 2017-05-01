/*
Tekijä: Petri Lamminaho
tiedosto: app.router.ts
kuvaus: Hoitaa sivuston routinkin ja navikoinnin
Lou routes, router  muuttajat

*/

// importataan Angularin routing hommelit
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// importataan kaikki aivut eli komponentit 
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {SearchComponent} from './search/search.component';
import {AboutComponent} from './about/about.component';


// Routes- muuttuja pitää sisällään kaikki sivuston sivut ja niiden pathit 
export const router: Routes = [
    { path: '',        component: WelcomeComponent}, //  root on Welcome komponentti 
    { path: 'welcome', component: WelcomeComponent},
    { path: 'search',  component: SearchComponent},
    { path: 'about',   component: AboutComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router); // luo routes-muutujan jolle viedää router

/*
HUOM  welcome sivun kanssa toimii myös tämä tapa joka ohjaa käyttäjän welcome kompoon kun tullaan juureen eli kun  app-kompo käynistetään
  { path: '', redirectTo: 'welcome', pathMatch:'full' },  //pathMatch on oltava full  muutoin jokainen sivu ohjautuu rootiin 
   // käytän kuitenkin  tapaa jossa root on Welcome komponentti 
   pieniä eroja toiminnassa on navbar kompoon pieni muutos
    */