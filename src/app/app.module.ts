import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CatalogComponent } from './courses/catalog/catalog.component';
import { HeaderComponent } from './mutual/header/header.component';
import { FooterComponent } from './mutual/footer/footer.component';
import { MainCarouselComponent } from './mutual/main-carousel/main-carousel.component';
import { CarouselComponent } from './mutual/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseDetailsComponent,
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    MainCarouselComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
