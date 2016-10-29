import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ProductFilterPipe} from './product-filter.pipe';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { PersonalPageComponent } from './personal-page.component';
import {ContactComponent} from './contact.component'
import {TechComponent} from './tech.component'
import { ProductService} from './product.service';
import { StarComponent} from './star.component';
import {ProductDetailComponent} from './product-detail.component';
import {RouterModule} from '@angular/router';
import {ProductDetailGuard} from './product-guard.service';
import { SharedModule } from '../shared/shared.module';
import {ProfessionalDetailComponent} from './professionaldetail.component';
import {AlternateComponent} from './alternate.component';

@NgModule({
  imports: [SharedModule,RouterModule.forChild([
    {path:'prof',component:PersonalPageComponent},
    {path:'prof/:id',component:ProfessionalDetailComponent},
    // {path: 'profesional/:id',
     //canActivate:[ProductDetailGuard],
     //component:ProductDetailComponent},
     {path:'tech',component:TechComponent},
     {path:'Contact',component:ContactComponent},
     {path:'alternate',component:AlternateComponent},
  ])],
  exports:[RouterModule],
  declarations: [ 
  HomePageComponent,
  PersonalPageComponent,
  ProductFilterPipe,
    StarComponent,
    ContactComponent,
    TechComponent,
    ProfessionalDetailComponent,
    AlternateComponent,
  ProductDetailComponent],

  providers:[ ProductService,ProductDetailGuard]
})
export class ProductModule { }
