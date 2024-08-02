import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MatcherComponent } from './components/matcher/matcher.component';
import { DogfinderComponent } from './components/dogfinder/dogfinder.component';
import { DogdetailsComponent } from './components/dogdetails/dogdetails.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'matcher', component:MatcherComponent},
    {path: 'dogfinder', component:DogfinderComponent},
    {path: 'dogdetails', component:DogdetailsComponent},
];
