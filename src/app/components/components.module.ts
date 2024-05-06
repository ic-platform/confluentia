import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FumecFooterComponent } from './fumec-footer/fumec-footer.component';
import { HeaderWithNavbarComponent } from './header-with-navbar/header-with-navbar.component';
import { HeaderJustLogoComponent } from './header-just-logo/header-just-logo.component';
import { MenuButtonsComponent } from './menu-buttons/menu-buttons.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FumecFooterComponent,
    HeaderWithNavbarComponent,
    HeaderJustLogoComponent,
    MenuButtonsComponent
  ],
  exports: [
    HeaderComponent,
    FumecFooterComponent,
    HeaderWithNavbarComponent,
    HeaderJustLogoComponent,
    MenuButtonsComponent
  ]
})
export class ComponentsModule { }
