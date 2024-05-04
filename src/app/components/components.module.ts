import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FumecFooterComponent } from './fumec-footer/fumec-footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FumecFooterComponent
  ],
  exports: [
    HeaderComponent,
    FumecFooterComponent
  ]
})
export class ComponentsModule { }
