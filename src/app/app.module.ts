import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CatalogComponent } from './courses/catalog/catalog.component';
import { CardsComponent } from './courses/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseDetailsComponent,
    CatalogComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
